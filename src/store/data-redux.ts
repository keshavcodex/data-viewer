import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'excelData',
    initialState: {
        excelDataArray: []
    },
    reducers: {
        setExcelData(state, action) {
            state.excelDataArray = action.payload;
        }
    }
});
