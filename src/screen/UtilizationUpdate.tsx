import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import PieChart from '../component/PieChart';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoModeSharpIcon from '@mui/icons-material/AutoModeSharp';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

export default function UtilizationUpdate() {
	const data = useSelector((state: any) => state.excelData.excelDataArray);
	const bussinessQuarter = data?.titles?.bussinessQuarterTitle;
	const cnrUtilisation = data?.cnrUtilisation;

	return (
		<Box display={'flex'}>
			<Box
				sx={{
					width: 550
				}}
			>
				<Box
					component='img'
					src='/miningImg.jpg'
					alt='Group'
					sx={{
						height: 500, // Adjust height
						width: 550 // Adjust width
					}}
				/>
				<Typography
					variant='h2'
					align='center'
					bgcolor={'#d1acfa'}
					py={1}
					fontWeight={400}
				>
					Business Update CNR | {bussinessQuarter} Utilization
				</Typography>
			</Box>
			<Box sx={{ flexGrow: 1, px: 1 }}>
				<Typography
					color={'#fff'}
					bgcolor={'#380573'}
					align='center'
					fontSize={25}
					fontWeight={'600'}
				>
					Chemicals and Natural Resources(Industry Consulting on Industry)
				</Typography>
				<PieChart data={cnrUtilisation?.regions} />
				<Typography
					sx={{ border: '2px solid #6921bb', borderStyle: 'dashed', mx: 5 }}
				></Typography>
				<Box sx={{ display: 'flex', justifyContent: 'space-around', my: 4 }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<PersonIcon
							sx={{ fontSize: 50, border: '1px solid black', borderRadius: 10 }}
						/>
						<Typography sx={{ fontSize: 24, fontWeight: 600 }}>
							{cnrUtilisation?.chgFte}
						</Typography>
						<Typography>Chg. FTEs</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<InsightsIcon sx={{ fontSize: 50 }} />
						<Typography sx={{ fontSize: 24, fontWeight: 600, color: 'green' }}>
							{cnrUtilisation?.growth + '%'}
						</Typography>
						<Typography>Growth</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<AutoModeSharpIcon sx={{ fontSize: 50 }} />
						<Typography sx={{ fontSize: 24, fontWeight: 600 }}>
							{cnrUtilisation?.timeOnSC + '%'}
						</Typography>
						<Typography>chg adshfioaj</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<DiamondOutlinedIcon sx={{ fontSize: 50 }} />
						<Typography sx={{ fontSize: 24, fontWeight: 600 }}>
							{cnrUtilisation?.tod + '%'}
						</Typography>
						<Typography>TOD%</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
