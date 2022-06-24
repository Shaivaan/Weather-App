// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {Input} from './Input/Input';
import { Gelocation } from './Gelocation/Gelocation';
import { Seven } from './Seven/Seven';
import { addCor } from '../Redux/action';


export const Main=()=> {

    const dispatch = useDispatch();
    const cor = useSelector((store)=>{return store.cor});
    const [ordinate,setOrdinate] = useState();
    
    useEffect(()=>{
        getClientCor();
        getLocation()
    },[])


    function getLocation() {
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

    }
    
    
    const getClientCor = ()=>{
        Gelocation(setOrdinate);
  }

  return (
    <div className="App">
    <Input/>
    {cor && <Seven/>}
    
    
    </div>
  );
}


