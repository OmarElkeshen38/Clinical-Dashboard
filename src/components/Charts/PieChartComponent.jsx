import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartComponent = () => {
  const chartOptions = {
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Banadol', 'VitaminB12', 'Cold&flue', 'Other'],
      colors: ['#FEB157', '#A765FA', '#FF6F6F', '#3BBDC4'],
     
    },
    series: [38.6, 22.5, 30.8, 8.1],
  };

  return (
    <div className="chart">
      <ReactApexChart options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        height={360}
        width={360}
      />
    </div>
  );
}

export default PieChartComponent;
