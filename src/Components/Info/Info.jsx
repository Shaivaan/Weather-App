import React from 'react'

export const Info = ({pressure,humidity,sunrise,sunset,temp}) => {
  return (
    <>
    
    <div className='info'>
        <h1 style={{fontSize:"60px"}}>{temp}°C</h1>
        <div className='box'> 
            <div>Pressure:{pressure}hpa</div>
            <div>Humidity:{humidity}%</div>
        </div>
        <br />
        <br />
        <div className='box'> 
            <div>Sunrise:{sunrise}</div>
            <div>Sunset:{sunset}</div>
        </div>
        </div> 
    </>
  )
}


