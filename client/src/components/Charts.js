import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, PointElement,
  LineElement, Title, ArcElement, Tooltip, Legend);

// const data = {
//   labels: ['Amazon', 'Walmart', 'Target', 'Costco', 'BestBuy', 'ebay'],
//   datasets: [
//     {
//       label: 'Variety of collections available',
//       data: [60, 0, 26, 24, 24, 31],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

function Charts() {
  useEffect(() => {
    const fetchVariety = async () => {
      const res = await fetch("http://localhost:8000/analysis/varietyCount/all/chair")
      const data = await res.json()
      setChartData({
        labels: data.map((variety) => variety.website),
        datasets: [
          {
            label: 'Variety of collections available',
            data: data.map((variety) => variety.count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
          }
        ]
      });
    };
    fetchVariety()
  }, []);

  var [chartData, setChartData] = useState(undefined)

    return (

      <div style={{display:"flex", width:"60vw", height:"80vh", marginBottom:"15vh", marginTop:"5vh"}}>
      { chartData != undefined ? (
        <div>
      <h2 style={{margin: "auto", marginLeft:"3vw", marginRight:"3vw"}}> Variety of collections available across websites </h2>
          <Pie 
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Variety of collections available',
              fontSize:20
            },
            responsive: true,
            maintainAspectRatio: false
          }}
          />
          </div>
      ) : (
        <div></div>
      )}
      </div>

    );
}

export default Charts;
