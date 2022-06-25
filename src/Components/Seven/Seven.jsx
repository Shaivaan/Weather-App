import React, { useEffect, useState } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import { addTemp } from '../../Redux/action';
import { Card } from '../Card/Card';
import { Schart } from '../Chart/Chart';
import { Info } from '../Info/Info';
import { Maps } from '../Map/Map';


export const Seven = () => {
  const temp = useSelector((store)=>{return store.temp});
    const cor = useSelector((store)=>{return store.cor});
    const disptach = useDispatch();
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
    },[cor])

   
    // ddc894a0a38425be12ca6bbf79cb31e5   
    const getData = ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cor.latitude}&lon=${cor.longitude}&exclude=hourly,minutely,alerts,current&appid=101a92bcfac16a59b72f70ca121a9b6d&units=metric`).then((res)=>{
            res.json().then((res)=>{
                setData([...res.daily]);
                let a = res.daily[0];
                let arr = [`${a.temp.morn}°C`,`${a.temp.day}°C`,`${a.temp.eve}°C`,`${a.temp.night}°C`]
                disptach(addTemp(arr));
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
        disptach(addTemp([`${el.temp.morn}°C`,`${el.temp.day}°C`,`${el.temp.eve}°C`,`${el.temp.night}°C`]))
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

    
    if (t == "time") {
      return date.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
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
       
    <div> {!temp ? "" : <Schart/>}</div>
        <Info pressure={info.pressure} temp= {info.temp} humidity= {info.humidity} sunrise= {info.sunrise} sunset={info.sunset}/>
        </div>
   
   
    </>
  )
}


