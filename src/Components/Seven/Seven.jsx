import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card';
import { Info } from '../Info/Info';

export const Seven = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        getData()
    },[])
    
    const getData = ()=>{
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=27.1833&lon=78.0167&exclude=hourly,minutely,alerts,current&appid=ddc894a0a38425be12ca6bbf79cb31e5&units=metric").then((res)=>{
            res.json().then((res)=>{
                setData([...res.daily]);
            })
        })
        
    }
  return (
    <>
    <div className='cards'>
        {data.map((el)=>{
            return <Card sec={el.dt} temp={el.temp.day} desc = {el.weather[0].main}/>
        })}
    </div>
    <br />
        <Info/>
   
    </>
  )
}


