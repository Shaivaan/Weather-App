import React from 'react'

export const Info = () => {
  return (
    <>
    
    <div className='info'>
        <h1 style={{fontSize:"60px"}}>40°C</h1>
        <div className='box'> 
            <div>Pressure:{"1005 hpa"}</div>
            <div>Humidity:{"23%"}</div>
        </div>
        <br />
        <br />
        <div className='box'> 
            <div>Sunset:{" 5:24 A.M"}</div>
            <div>Sunrise:{" 5:24 A.M"}</div>
        </div>
        </div> 
    </>
  )
}


