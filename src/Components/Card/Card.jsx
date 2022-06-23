import React from 'react'

export const Card = () => {
    const day = Date(1655965800).split(" ")[0]

  return (
    <>
        <div className='card'>
            <div className='cardText'>{day}</div>
            <div className='cardText'>36°C</div>
            <img  src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" height={"50%"} width={"50%"}  />
            <div className='cardText'>Clear</div>
        </div>
    </>
  )
}


