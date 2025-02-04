import { Box, ThemeProvider } from '@mui/material';
import theme from '../component/theme';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../component/Navbar';
import DataViewer from './DataViewer';
import DevMode from './DevMode';
import { useEffect } from 'react';
import { setExcelData } from '../store/store';
import { jsonDataTemp } from '../store/json-data';

export default function Home() {
	const isDevMode = useSelector((state: any) => state.devMode.isDevMode);
	const dispatch = useDispatch();

	useEffect(() => {
		// localStorage.setItem('excelData', JSON.stringify(jsonDataTemp));
		const getLocalData = localStorage.getItem('excelData');
		if (getLocalData) {
			const excelData = JSON.parse(getLocalData);
			dispatch(setExcelData(excelData));
		}
		// eslint-disable-next-line
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Navbar />
				{isDevMode ? <DevMode /> : <DataViewer />}
			</Box>
		</ThemeProvider>
	);
}
