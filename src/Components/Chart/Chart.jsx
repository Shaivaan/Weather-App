import React, { Component, useEffect } from 'react'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import { store } from '../../Redux/store';

export const Schart = ()=>{
    const temp = useSelector((store)=>store.temp);

    useEffect(()=>{
        
    },[temp])

    const RenderChart = ()=>{
        return <>
         <Charts temp = {temp}/>
        </>
    }

    return <>
        <RenderChart/>
    </>
}
   
  
class Charts extends Component {
    constructor(props) { 
      super(props);
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
            name: "Temp(in°C)",
            data: props.temp
          }
        ]
      };
    }
  
    render() {
      return (
        <div className="chartapp">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="100%"
                height="300px"
              />
            </div>
          </div>
        </div>
      );
    }
  }


