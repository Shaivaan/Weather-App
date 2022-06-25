import React, { Component } from 'react'
import Chart from "react-apexcharts";





class Charts extends Component {
    constructor(props) { 
      super(props);
        console.log(props.temp)
      this.state = {
        options: {
          chart: {
            id: "area"
          },
          stroke:{
            curve:"smooth"
          },
          xaxis: {
            categories: ["Morning","Day","Evening","Night"]
          },
          dataLabels:{
            enabled:false
          }
        },
        series: [
          {
            name: "series-1",
            data: [11,12,13,14]
          }
        ]
      };
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="500"
              />
            </div>
          </div>
        </div>
      );
    }
  }

export default Charts;
