import { Box } from '@mui/material';

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
