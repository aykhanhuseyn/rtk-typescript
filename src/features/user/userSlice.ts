import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { filter } from 'lodash';
import { generateId } from '../../utils/generateId';
import { getUsersList } from './userApi';
import { State, User } from './models';
import { stat } from 'fs';

const initialState: State = {
	data: [],
	isLoading: false,
	isSuccess: false,
	isError: false,
	isUninitialized: true,
};

export const getUsers = createAsyncThunk('user/getUsers', async () => {
	return await getUsersList();
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		createUser: (state, action: PayloadAction<Omit<User, 'id'>>) => {
			state.data.push({ ...action.payload, id: generateId() });
		},
		deleteUser: (state, action: PayloadAction<User['id']>) => {
			state.data = filter(state.data, (user) => user.id !== action.payload);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getUsers.pending, (state) => {
				state.isUninitialized = false;
				state.isLoading = true;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.status = action.payload.status;
				state.data = action.payload.data;
			})
			.addCase(getUsers.rejected, (state, action: any) => {
				console.log(action);
				state.isError = true;
				state.isLoading = false;
				state.status = action.error?.status;
				state.error = { messages: [action.error?.message] };
			});
	},
});

export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
