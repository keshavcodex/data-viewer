import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExcelData } from '../store/store';
import { jsonDataTemp } from '../store/json-data';

import BusinessUpdate from './BusinessUpdate';

export default function DataViewer() {

	return (
		<Box>
            <BusinessUpdate />
		</Box>
	);
}
