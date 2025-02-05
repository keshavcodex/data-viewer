import { Box, Typography } from '@mui/material';
import { jsonDataTemp } from '../store/json-data';
import { LineRaceChart } from '../component/LineRaceChart';
import { useSelector } from 'react-redux';
import { DonutChart } from '../component/DonutChart';
import GroupsIcon from '@mui/icons-material/Groups';
import BarChart from '../component/BarChart';

export default function BusinessUpdate() {
	const data = useSelector((state: any) => state.excelData.excelDataArray);
	const bussinessQuarter = data?.titles?.bussinessQuarterTitle;
	const chargeability = data.qtdChargebility;
	const fr = data.qtdFr;

	return (
		<Box>
			<Typography variant='h4' align='center' bgcolor={'#d1acfa'} mb={1} py={1}>
				Business Update CNR | {bussinessQuarter} Performance
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}
			>
				<Box sx={{ minWidth: '60%' }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-around',
                            mb: 5
						}}
					>
						<Typography color={'#8231de'} fontSize={25} fontWeight={'600'}>
							Chargeability
							<Typography fontSize={35} align='center'>
								{chargeability?.actual}
							</Typography>
							<Typography fontSize={18} align='center'>
								Target: {chargeability?.target}
							</Typography>
						</Typography>
						<Typography fontSize={25} fontWeight={'600'}>
							Financial Recovery
							<Typography fontSize={35} align='center'>
								{fr?.actual}
							</Typography>
							<Typography fontSize={18} align='center'>
								Target: {fr?.target}
							</Typography>
						</Typography>
					</Box>
					<LineRaceChart data={data}/>
				</Box>
				<Box sx={{ flexGrow: 1, bgcolor: '#fbf7ff' }}>
					<Box>
						<Typography
							color={'#fff'}
							bgcolor={'#380573'}
							align='center'
							fontSize={25}
							fontWeight={'600'}
						>
							Diversity
						</Typography>
						<DonutChart value={data?.ratio?.diversity}/>
					</Box>
					<Box>
						<Typography
							color={'#fff'}
							bgcolor={'#380573'}
							align='center'
							fontSize={25}
							fontWeight={'600'}
						>
							Executive Ratio
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column'
							}}
						>
							<Box
								component='img'
								src='/group.png'
								alt='Group'
								sx={{ width: 100, height: 100 }} // Adjust size as needed
							/>
							<Typography sx={{ fontSize: 35, fontWeight: 600, ml: 2 }}>
								{data?.ratio?.executiveRatio + '%'}
							</Typography>
						</Box>
					</Box>
					<Box>
						<Typography
							color={'#fff'}
							bgcolor={'#380573'}
							align='center'
							fontSize={25}
							fontWeight={'600'}
						>
							Head Count
						</Typography>
						<BarChart data={data?.headCount} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
