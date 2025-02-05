import { createSlice } from '@reduxjs/toolkit';

export const devModeSlice = createSlice({
	name: 'devMode',
	initialState: {
		isDevMode: false
	},
	reducers: {
		toggleDevMode(state) {
			state.isDevMode = !state.isDevMode;
		}
	}
});
