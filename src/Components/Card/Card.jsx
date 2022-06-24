import React, { useEffect, useState } from 'react'

export const Card = ({sec,temp,desc}) => {
    const days = convertSecondstoTime(sec);
    const [imag,setImag] = useState(false);

    function chooseImg(desc){
      if(desc === "Clear"){
        setImag("https://weatherapp-swanand.netlify.app/img/sunny.ef428e2d.svg")
        return;
      }else if(desc === "Clouds"){
        setImag("https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg")
        return;
      }else if(desc === "Rain"){
        setImag("https://cdn-icons-png.flaticon.com/512/1146/1146858.png")
        return;
      }
    }
    

    useEffect(()=>{

      chooseImg(desc);

    },[])


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
if (t === "time") {
return date.toLocaleTimeString();
} else if (t === "year") {
return date.getDate() + " " + weekobj[day] + " " + year;
} else {
return  weekobj[day];
}

// return date.getDate() + " " + weekobj[day]
    }







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


