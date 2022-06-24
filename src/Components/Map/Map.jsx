import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Maps=()=> {

    const map = useSelector((store)=>{return store.map});
   
    

  return (
    <>
    <div>
    <iframe width="100%" height="500px" id="gmap_canvas" src={`https://maps.google.com/maps?q=${map}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
    </div>
    </>
  )
}


