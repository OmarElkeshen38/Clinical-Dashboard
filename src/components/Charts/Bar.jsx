import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: 'Sum of direct visits',
        data: [20, 35, 25, 30, 38],
      },
      {
        name: 'Sum of referral visits',
        data: [25, 20, 30, 25, 20],
      },
      {
        name: 'Sum of searchl visits',
        data: [45, 40, 45, 50, 45],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 100,
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Spet 1-6', 'Spet 7-12', 'Spet 13-18', 'Spet 19-24', 'Spet 25-30'],
      },
      tooltip: {
        enabled: true,
      },
      colors: ['rgba(255, 166, 0, 0.80)', 'rgba(255, 86, 48, 0.80)', '#56CCF2']
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={250} />
    </div>
  );
};

export default ApexChart;
