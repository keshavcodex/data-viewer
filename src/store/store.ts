import { configureStore } from '@reduxjs/toolkit';
import { devModeSlice } from './mode-redux';
import { dataSlice } from './data-redux';

const store = configureStore({
	reducer: {
		devMode: devModeSlice.reducer,
		excelData: dataSlice.reducer,
	}
});

export const setExcelData = (body: any) =>
	store.dispatch(dataSlice.actions.setExcelData(body));

export const toggleDevMode = () => devModeSlice.actions.toggleDevMode();

export default store;
