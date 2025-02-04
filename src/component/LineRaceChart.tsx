import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Typography } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

interface LineRaceChartProps {
  data: {
    cnrChg: Record<string, number>;
    cnrFR: Record<string, number>;
  };
}

export const LineRaceChart: React.FC<LineRaceChartProps> = ({ data }) => {
	// Ensure data has default values to prevent conditional hook calls
	const validData = data && data.cnrChg && data.cnrFR ? data : { cnrChg: {}, cnrFR: {} };
  
	const months = Object.keys(validData.cnrChg);
	const cnrChgValues = Object.values(validData.cnrChg);
	const cnrFRValues = Object.values(validData.cnrFR);
  
	// React hooks should always be called in the same order
	const [index, setIndex] = useState(0);
	const totalSteps = months.length;
  
	useEffect(() => {
	  if (index < totalSteps - 1) {
		const interval = setInterval(() => {
		  setIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
		}, 400);
  
		return () => clearInterval(interval);
	  }
	}, [index, totalSteps]);
  
	if (months.length === 0) {
	  return <Typography>No data available</Typography>;
	}
  
	// Filter out zero values
	const filteredMonths: string[] = [];
	const filteredCnrChg: number[] = [];
	const filteredCnrFR: number[] = [];
  
	months.forEach((month, i) => {
	  if (cnrChgValues[i] !== 0 || cnrFRValues[i] !== 0) {
		filteredMonths.push(month);
		filteredCnrChg.push(cnrChgValues[i]);
		filteredCnrFR.push(cnrFRValues[i]);
	  }
	});
  
	// Compute dynamic min and max
	const allValues = [...filteredCnrChg, ...filteredCnrFR];
	const minY = Math.min(...allValues);
	const maxY = Math.max(...allValues);
  
	const option = {
	  title: {
		text: 'CNR Line Race Chart',
		left: 'center',
		textStyle: { fontSize: 16 }
	  },
	  tooltip: { trigger: 'axis' },
	  xAxis: {
		type: 'category',
		data: filteredMonths.slice(0, index + 1),
		name: 'Months'
	  },
	  yAxis: {
		type: 'value',
		name: 'Value (%)',
		min: minY,
		max: maxY
	  },
	  series: [
		{
		  name: 'CNR Chg',
		  type: 'line',
		  data: filteredCnrChg.slice(0, index + 1),
		  smooth: true,
		  label: { show: true },
		  lineStyle: { width: 3, color: '#87c46a' }
		},
		{
		  name: 'CNR FR',
		  type: 'line',
		  data: filteredCnrFR.slice(0, index + 1),
		  smooth: true,
		  label: { show: true },
		  lineStyle: { width: 3, color: '#4a66bb' }
		}
	  ],
	  animationDuration: 500
	};

  return (
    <Box>
      <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography>CNR CHG</Typography>
            <HorizontalRuleIcon sx={{ color: '#87c46a', fontSize: '40px' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography>CNR FR</Typography>
            <HorizontalRuleIcon sx={{ color: '#4a66bb', fontSize: '40px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
