import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const sessionUser = useSelector(state => state.session.user);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const [redirect, setRedirect] = useState(false);

	// If already logged in, redirect home
	if (sessionUser) return <Navigate to='/' />;

	const handleSubmit = async e => {
		e.preventDefault();
		setErrors([]);

		const res = await dispatch(
			sessionActions.signup({ email, password, firstName, lastName })
		);

		if (res.ok) {
			const prevUrl = localStorage.getItem('prevUrl');
			navigate(prevUrl || '/'); // ✅ replaces window.location.href
			localStorage.removeItem('prevUrl');
		} else {
			const data = await res.json();
			if (data?.errors) setErrors(data.errors);
			else if (data) setErrors([data]);
			else setErrors([res.statusText]);
		}
	};

	const handleClick = e => {
		e.preventDefault();
		setRedirect(true);
	};

	if (redirect) return <Navigate to='/login' />;

	const welcomeMessage =
		"By creating an account you'll instantly earn 50 rewards points and gain easy access to your order status and order history.";

	return (
		<div className='signup-container'>
			<form className='form-container' onSubmit={handleSubmit}>
				<ul className='error-list'>
					{errors.map((error, index) => (
						<li key={index}>
							<span className='error-message'>{error}</span>
						</li>
					))}
				</ul>

				<h6 className='signup-header'>Create Your Account</h6>
				<p className='signup-descrip'>{welcomeMessage}</p>

				<div className='signup-fields'>
					<label className='signup-labels'>
						First Name
						<input
							type='text'
							value={firstName}
							placeholder='First Name'
							onChange={e => setFirstName(e.target.value)}
							className='input-field'
							required
						/>
					</label>
					<label className='signup-labels'>
						Last Name
						<input
							type='text'
							value={lastName}
							placeholder='Last Name'
							onChange={e => setLastName(e.target.value)}
							className='input-field'
							required
						/>
					</label>
					<label className='signup-labels'>
						Email
						<input
							className='input-field'
							type='text'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</label>
					<label className='signup-labels'>
						Password
						<input
							className='input-field'
							type='password'
							autoComplete='current-password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</label>
				</div>

				<div className='signup-buttons-container'>
					<button className='create-account-button-signup' type='submit'>
						CREATE ACCOUNT
					</button>

					<p className='signup-p'>Already have an account?</p>
					<button className='sign-in-button' onClick={handleClick}>
						SIGN IN
					</button>
				</div>
			</form>
		</div>
	);
}

export default SignupFormPage;
