import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card';
import { Info } from '../Info/Info';
const timeFormatter = require("seconds-time-formatter");

export const Seven = ({or}) => {
    const [data,setData] = useState([]);
    const [info,setInfo] = useState({
        humidity:"",
        pressure:"",
        sunrise:"",
        sunset:"",
        temp:"",
    })

    useEffect(()=>{
        getData();
    },[])

    console.log(or);
    
    const getData = ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${or.latitude}&lon=${or.longitude}&exclude=hourly,minutely,alerts,current&appid=ddc894a0a38425be12ca6bbf79cb31e5&units=metric`).then((res)=>{
            res.json().then((res)=>{
                setData([...res.daily]);
                setInfo({
                    humidity:res.daily[0].humidity,
                    pressure:res.daily[0].pressure,
                    sunrise:convertSecondstoTime(res.daily[0].sunrise,"time"),
                    sunset:convertSecondstoTime(res.daily[0].sunset,"time"),
                    temp:res.daily[0].temp.day,
                })
            })
        })
    }

   

    const InfoData = (el)=>{
        setInfo({
            humidity:el.humidity,
            pressure:el.pressure,
            sunrise: convertSecondstoTime(el.sunrise,"time"),
            sunset: convertSecondstoTime(el.sunset,"time"),
            temp: el.temp.day 
        })
    }

    
       
           
         
                
                function convertSecondstoTime(int,t) {
                    var date = new Date(int * 1000);
    var day = date.getUTCDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    var weekobj = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      0: "Sunday",
    };

    var monthobj = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };

    // console.log(date.getDate(), day);
    if (t == "time") {
      return date.toLocaleTimeString();
    } else if (t == "year") {
      return date.getDate() + " " + weekobj[day] + " " + year;
    } else {
      return date.getDate() + " " + weekobj[day];
    }

    // return date.getDate() + " " + weekobj[day]
                  }
            
          
        
    

  return (
    <>
   <div>
    <div className='cards'>
        {data.map((el,i)=>{
            return <div key={i} onClick={()=>{InfoData(el)}}><Card sec={el.dt} temp={el.temp.day} desc = {el.weather[0].main}/></div>
        })}
    </div>
    <br />
        <Info pressure={info.pressure} temp= {info.temp} humidity= {info.humidity} sunrise= {info.sunrise} sunset={info.sunset}/>
        </div>
   
   
    </>
  )
}


