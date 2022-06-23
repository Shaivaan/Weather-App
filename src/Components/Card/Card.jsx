import React, { useEffect, useState } from 'react'

export const Card = ({sec,temp,desc}) => {
    const days = Date(1656397800).split(" ")[0] || "";
    const [imag,setImag] = useState(false);
    
    function chooseImg(desc){
      if(desc == "Clear"){
        setImag("https://weatherapp-swanand.netlify.app/img/sunny.ef428e2d.svg")
        return;
      }else if(desc == "Clouds"){
        setImag("https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg")
        return;
      }else if(desc == "Rain"){
        setImag("https://cdn-icons-png.flaticon.com/512/1146/1146858.png")
        return;
      }
    }
    

    useEffect(()=>{

      chooseImg(desc);

    },[])

  return (
    <>
        <div className='card'>
            <div className='cardText'>{days}</div>
            <div className='cardText'>{temp}°C</div>
            <img  src={!imag ? "dsa":imag } height={"50%"} width={"50%"}  />
            <div className='cardText'>{desc}</div>
        </div>
    </>
  )
}


