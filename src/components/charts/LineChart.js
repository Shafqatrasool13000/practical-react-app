import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'
const LineChart = () => {
    Chart.register(CategoryScale)
    const options = {
        title: {
          display: true,
          text: 'Line Chart'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 6,
                stepSize: 1
              }
            }
          ]
        }
      }
    const data={
        labels:['Jan','Feb','March','April','May'],
        datasets:[
            {
                label:'Sales of 2020(M)',
                data:[3,2,2,1,5],
                borderColor: ['rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)',],
                backgroundColor: ['rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 206, 86, 0.2)',],
                
            },
            {
                label:'Sales of 2020(M)',
                data:[13,12,12,11,55],
                borderColor: ['rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)','rgba(54, 162, 235, 0.2)',],
               
            },
              
        ]
    }
    return (
        <div style={{width:'720px'}}>
            {/* <Line data={data} options={options}/> */}
            <Bar  data={data} options={options}/>
        </div>
    )
}

export default LineChart
