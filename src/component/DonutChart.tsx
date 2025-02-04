import React from 'react';
import ReactECharts from 'echarts-for-react';

interface RingChartProps {
	value: number;
}

export const DonutChart: React.FC<RingChartProps> = ({ value }) => {
	const value1 = value;
	const value2 = 100 - value;

	const option = {
		title: {
			left: 'center',
			textStyle: { fontSize: 20 }
		},
		tooltip: {
			trigger: 'item',
			formatter: (params: any) =>
				`${params.marker} ${params.seriesName}: ${params.value} (${params.percent}%)`
		},
		legend: {
			show: false
			// orient: 'vertical',
			// left: 'right',
			// data: ['Male', 'Female']
		},
		series: [
			{
				name: 'Gender',
				type: 'pie',
				radius: ['50%', '80%'], // Donut shape (ring)
				avoidLabelOverlap: false,
				label: {
					show: true,
                    fontSize: 18,
					formatter: '{b}: {d}%'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '16',
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: true
				},
				data: [
					{ value: value1, name: 'Female', itemStyle: { color: '#af6efa' } },
					{ value: value2, name: 'Male', itemStyle: { color: '#6b24bd' } }
				]
			}
		]
	};

	return (
		<ReactECharts option={option} style={{ height: '200px', flexGrow: 1}} />
	);
};
