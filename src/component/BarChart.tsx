import React from "react";
import ReactECharts from "echarts-for-react";

interface BarChartProps {
  data: Record<string, number>;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  if (!data || Object.keys(data).length === 0) return <></>;

  // Sort data by value, highest first
  const sortedData = Object.entries(data).sort(([, a], [, b]) => a - b);
  const countries = sortedData.map(([country]) => country);
  const values = sortedData.map(([, value]) => value);

  // Calculate total count
  const totalCount = values.reduce((sum, value) => sum + Number(value), 0);

  const option = {
    title: {
      text: `Total: ${totalCount}`, // Dynamic total count
      left: "left",
      textStyle: { fontSize: 16 },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    grid: {
      left: "5%", // Adjust left padding for better label visibility
      right: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      name: "Value",
    },
    yAxis: {
      type: "category",
      data: countries, // Country names as labels
      axisLabel: {
        show: true,
        fontSize: 12,
        interval: 0, // Show all labels
        overflow: "truncate", // Prevent cropping
      },
    },
    series: [
      {
        name: "Values",
        type: "bar",
        data: values, // Corresponding values
        barWidth: "40%", // Adjust bar thickness
        itemStyle: {
          color: "#6b24bd", // Bar color
        },
        label: {
          show: true,
          position: "right", // Display values on the bars
          fontSize: 14,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "300px", width: "90%" }} />;
};

export default BarChart;
