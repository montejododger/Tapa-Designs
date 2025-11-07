import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { csrfFetch } from './csrf';

const storeCSRFToken = response => {
        const csrfToken = response.headers.get('X-CSRF-Token');
        if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
};

const storeCurrentUser = user => {
        if (user) {
                sessionStorage.setItem('currentUser', JSON.stringify(user));
        } else {
                sessionStorage.removeItem('currentUser');
        }
};

const ensureJson = async response => {
        try {
                return await response.clone().json();
        } catch (error) {
                return {};
        }
};

export const login = createAsyncThunk(
        'session/login',
        async ({ email, password }, { rejectWithValue }) => {
                const res = await csrfFetch('/api/session', {
                        method: 'POST',
                        body: JSON.stringify({ email, password }),
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data);
                }
                const data = await res.json();
                storeCurrentUser(data.user);
                return data.user;
        }
);

export const signup = createAsyncThunk(
        'session/signup',
        async ({ email, password, firstName, lastName }, { rejectWithValue }) => {
                const res = await csrfFetch('/api/users', {
                        method: 'POST',
                        body: JSON.stringify({ email, firstName, lastName, password }),
                });
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data);
                }
                const data = await res.json();
                storeCurrentUser(data.user);
                return data.user;
        }
);

export const logout = createAsyncThunk('session/logout', async (_, { rejectWithValue }) => {
        const res = await csrfFetch('/api/session', {
                method: 'DELETE',
        });
        if (!res.ok) {
                const data = await ensureJson(res);
                return rejectWithValue(data);
        }
        storeCurrentUser(null);
        return null;
});

export const restoreSession = createAsyncThunk(
        'session/restore',
        async (_, { rejectWithValue }) => {
                const res = await csrfFetch('/api/session');
                if (!res.ok) {
                        const data = await ensureJson(res);
                        return rejectWithValue(data);
                }
                storeCSRFToken(res);
                const data = await res.json();
                storeCurrentUser(data.user);
                return data.user;
        }
);

const initialState = {
        user: JSON.parse(sessionStorage.getItem('currentUser')),
        status: 'idle',
        error: null,
};

const sessionSlice = createSlice({
        name: 'session',
        initialState,
        reducers: {
                setCurrentUser: (state, action) => {
                        state.user = action.payload;
                        state.error = null;
                },
                removeCurrentUser: state => {
                        state.user = null;
                        state.error = null;
                },
                clearSessionError: state => {
                        state.error = null;
                },
        },
        extraReducers: builder => {
                builder
                        .addCase(login.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(login.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.user = action.payload;
                        })
                        .addCase(login.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(signup.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(signup.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.user = action.payload;
                        })
                        .addCase(signup.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(logout.pending, state => {
                                state.status = 'loading';
                                state.error = null;
                        })
                        .addCase(logout.fulfilled, state => {
                                state.status = 'succeeded';
                                state.user = null;
                        })
                        .addCase(logout.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        })
                        .addCase(restoreSession.pending, state => {
                                state.status = 'loading';
                        })
                        .addCase(restoreSession.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.user = action.payload;
                        })
                        .addCase(restoreSession.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.payload || action.error?.message || null;
                        });
        },
});

export const { setCurrentUser, removeCurrentUser, clearSessionError } = sessionSlice.actions;

export default sessionSlice.reducer;
