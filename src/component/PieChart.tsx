import ReactECharts from 'echarts-for-react';
import { toTitleCase } from '../util/caseConverter';

const PieChart = ({ data = {} }) => {
	if (typeof data !== 'object' || data === null) {
		console.error('PieChartComponent expects `data` to be an object', data);
		return <p>Error: Invalid data format</p>;
	}

	const chartData = Object.entries(data).map(([name, value]) => ({
		name: toTitleCase(name),
		value
	}));

	const chartOptions = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'right',
			textStyle: {
				fontSize: 15
			}
		},
		series: [
			{
				name: 'Region',
				type: 'pie',
				radius: '70%',
				data: chartData,
				label: {
					fontSize: 18,
                    formatter: ({ name, value, percent }: any) => `${name} (${percent}%)`,
				},
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};

	return (
		<ReactECharts
			option={chartOptions}
			style={{ height: 450, width: '100%' }}
		/>
	);
};

export default PieChart;
