import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import './LoginForm.css';

export const LoginFormPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const sessionUser = useSelector(state => state.session.user);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const [redirect, setRedirect] = useState(false);

	// redirect logged-in users
	useEffect(() => {
		if (sessionUser) navigate('/');
	}, [sessionUser, navigate]);

	// handle login
	const handleSubmit = async e => {
		e.preventDefault();
		setErrors([]);

		const res = await dispatch(sessionActions.login({ email, password }));
		if (res.ok) {
			navigate('/'); // 👈 replaces history.push
		} else {
			const data = await res.json();
			if (data?.errors) setErrors(data.errors);
			else if (data) setErrors([data]);
			else setErrors([res.statusText]);
		}
	};

	// demo user login
	const handleDemoSubmit = async e => {
		e.preventDefault();

		const demoUserEmail = 'demo@user.io';
		const demoUserPassword = 'password';

		const res = await dispatch(
			sessionActions.login({
				email: demoUserEmail,
				password: demoUserPassword,
			})
		);

		if (res.ok) {
			navigate('/');
		} else {
			const data = await res.json();
			if (data?.errors) setErrors(data.errors);
			else if (data) setErrors([data]);
			else setErrors([res.statusText]);
		}
	};

	// CREATE ACCOUNT BUTTON
	const handleClick = e => {
		e.preventDefault();
		setRedirect(true);
	};

	// redirect to signup page
	if (redirect) return <Navigate to='/signup' />; // 👈 replaces <Redirect>

	return (
		<div className='login-container'>
			<form className='form-container' onSubmit={handleSubmit}>
				<ul className='error-list'>
					{errors
						.join(',')
						.split(',')
						.map((error, index) => (
							<li key={index}>
								<span className='error-message'>{error}</span>
							</li>
						))}
				</ul>
				<br />
				<h6 className='signin-header'>Sign In</h6>
				<br />
				<p className='signin-descrip'>
					Sign in or create an account to become a member.
				</p>
				<br />
				<div className='login-fields'>
					<label className='login-labels'>
						Email Address *
						<input
							className='input-field'
							// placeholder="Email"
							type='text'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</label>
					<label className='login-labels'>
						Password *
						<input
							className='input-field'
							// placeholder="Password"
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</label>
				</div>
				<div className='login-buttons-container'>
					<button className='signup-button' type='submit'>
						SIGN IN
					</button>
					<br />
					<button className='signup-button' onClick={handleDemoSubmit}>
						DEMO USER
					</button>
					<br />
					<button onClick={handleClick} className='create-account-button'>
						CREATE ACCOUNT
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginFormPage;
