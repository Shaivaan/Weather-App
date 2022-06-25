// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {Input} from './Input/Input';
import { Gelocation } from './Gelocation/Gelocation';
import { Seven } from './Seven/Seven';
import { addCor, addMap } from '../Redux/action';
import { Maps } from './Map/Map';
import LoadingScreen from 'react-loading-screen';
import  Charts  from './Chart/Chart';


export const Main=()=> {
    const [loaded,setLoaded] = useState(false);
    const dispatch = useDispatch();
    const cor = useSelector((store)=>{return store.cor});
    const [ordinate,setOrdinate] = useState();
    const temp = useSelector((store)=>{return store.temp});
    useEffect(()=>{
        // getClientCor();
        getLocation();
       
    },[]);

   



    const getCityName = (lat,lon)=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ddc894a0a38425be12ca6bbf79cb31e5`).then((res)=>{
        res.json().then((res)=>{
          dispatch(addMap(res.name))
        })
      })
    }


    function getLocation() {
      setLoaded(true)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
      }
    }


    function showPosition(position) {
   setOrdinate({
    latitude:position.coords.latitude,
    longitude:position.coords.longitude
   })

   dispatch(addCor({
    latitude:position.coords.latitude,
    longitude:position.coords.longitude
   }))
   setLoaded(true)
   getCityName(position.coords.latitude,position.coords.longitude);
    }
    
    
    const getClientCor = ()=>{
        Gelocation(setOrdinate);
  }

  return (
    <div className="App">
      <Charts temp = {temp}/>

      {loaded == false  ?  <LoadingScreen
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    logoSrc='https://media1.giphy.com/media/58Y1tQU8AAhna/giphy.gif'
    text='Loading...'
  > 
    
    //<div>Loadable content</div>
  </LoadingScreen> :<> <Input/>
    {cor && <Seven/>}
    <Maps/></>}
   
    
    </div>
  );
}


