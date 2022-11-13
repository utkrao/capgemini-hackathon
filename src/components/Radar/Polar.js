import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Adidas', 'Virtual Planet', 'Lanzatech', 'ClimateTrade'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 5, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 0.5,
    },
  ],
};

const Polar = () => {
  return (
    <PolarArea data={data} 
    width={500}
    height = "500px"
    />
  )
}

export default Polar;
