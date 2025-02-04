import { createSlice } from '@reduxjs/toolkit';

export const devModeSlice = createSlice({
	name: 'devMode',
	initialState: {
		isDevMode: true
	},
	reducers: {
		toggleDevMode(state) {
			state.isDevMode = !state.isDevMode;
		}
	}
});
