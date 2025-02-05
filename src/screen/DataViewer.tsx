import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExcelData } from '../store/store';
import { jsonDataTemp } from '../store/json-data';

import BusinessUpdate from './BusinessUpdate';
import UtilizationUpdate from './UtilizationUpdate';

export default function DataViewer() {

	return (
		<Box>
            <BusinessUpdate />
			<UtilizationUpdate />
		</Box>
	);
}
