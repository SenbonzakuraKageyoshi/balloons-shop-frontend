import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "@/service/client";
import { removeToken, updateToken } from "@/utils/tokenActions";
import { RegisterFormValues, LoginFormValues } from "@/types/authFormValues";
import { User } from "@/types/user";
import { Status } from "@/types/status";
import { register, login, getUser } from "@/service/authService";

const namespace: string = 'auth';

export const fetchRegister = createAsyncThunk('auth/register', register);

export const fetchLogin = createAsyncThunk('auth/login', login);

export const fetchUser = createAsyncThunk('auth/get-user', getUser);

export interface UserState {
    data: User | null,
    status: Status
}

const initialState: UserState = {
    data: null,
    status: 'idle',
}

const userSlice = createSlice({
    name: '@user',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            state.status = 'idle';
            removeToken();
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
        builder.addCase(fetchLogin.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
        builder.addCase(fetchUser.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchUser.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
    }
});

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;