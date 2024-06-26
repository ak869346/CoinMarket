// LiveChart.js

import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import axios from 'axios';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LiveChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Bitcoin Price',
        data: [],
        borderColor: 'rgba(54, 162, 235, 1)', // Change line color to blue
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Change fill color to light blue
        tension: 0.1,
        // pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Change the points' color to blue
        borderWidth: 1, // Adjust line thickness as needed
      },
    ],
  });

  const [basePrice, setBasePrice] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const fetchedPrice = response.data.bitcoin.usd;
        setBasePrice(fetchedPrice);
      } catch (error) {
        console.error('Error fetching the Bitcoin price:', error);
      }
    };

    fetchPrice();

    const updateInterval = setInterval(() => {
      if (basePrice !== null) {
        const fluctuation = (Math.random() - 0.5) * 1000; // Simulated price change
        const newPrice = (basePrice + fluctuation).toFixed(2); // Apply fluctuation to base price
        const newTime = new Date().toLocaleTimeString();

        setData((prevData) => {
          const newData = { ...prevData };
          if (newData.labels.length >= 10) {
            newData.labels.shift();
            newData.datasets[0].data.shift();
          }
          newData.labels.push(newTime);
          newData.datasets[0].data.push(newPrice);

          return newData;
        });

        if (chartRef.current) {
          chartRef.current.update();
        }
      }
    }, 1000);

    return () => clearInterval(updateInterval);
  }, [basePrice]);

  return (
    <div className="chart-container">
      <h2>Live Bitcoin Price</h2>
      <Line ref={chartRef} data={data} />
    </div>
  );
};

export default LiveChart;
