import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  width: 500,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    directVisit: 30,
    referralVisit: 20,
    searchlVisit: 45,
    month: 'Spet 1-6',
  },
  {
    directVisit: 35,
    referralVisit: 20,
    searchlVisit: 40,
    month: 'Spet 7-12',
  },
  {
    directVisit: 25,
    referralVisit: 30,
    searchlVisit: 45,
    month: 'Spet 13-18',
  },

  {
    directVisit: 30,
    referralVisit: 25,
    searchlVisit: 50,
    month: 'Spet 19-24',
  },
  {
    directVisit: 30,
    referralVisit: 20,
    searchlVisit: 45,
    month: 'Spet 25-30',
  },
 
];

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
  return (
    <BarChart
      margin={{
       left: 40,
       right: 10,
       top: 10,
       bottom: 50,
      }}
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' , categoryGapRatio: 0.4, barGapRatio: 0.3}]}
      series={[
        { dataKey: 'directVisit', label: 'Sum of direct visits', valueFormatter , color: 'rgba(255, 166, 0, 0.80)'},
        { dataKey: 'referralVisit', label: 'Sum of referral visits', valueFormatter ,color: 'rgba(255, 86, 48, 0.80)'},
        { dataKey: 'searchlVisit', label: 'Sum of searchl visits', valueFormatter,color: '#56CCF2' },
      ]}
      
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: 0,
          labelStyle: {
              fontSize: 12,
            },
          itemMarkWidth: 5,
          itemMarkHeight: 5,
          markGap: 6,
          itemGap: 18,
        },
      }}
     
      {...chartSetting}
    />
  );
}
