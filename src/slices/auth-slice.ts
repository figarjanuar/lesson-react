import { User } from "@/api/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    user: User | null,
    isAuthenticated: boolean,
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false
            state.user = action.payload
            state.isAuthenticated = true
            state.error = null
            console.log(action.payload);
        },
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
          state.user = null;
          state.isAuthenticated = false;
        },
    }
})

export const {
    loginFailure,
    loginStart,
    loginSuccess,
    logout
} = authSlice.actions

export default authSlice.reducer

