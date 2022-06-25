import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Maps=()=> {

    const map = useSelector((store)=>{return store.map});
   
    

  return (
    <>
    <br />
    <div>

        {!map ?<><img src='https://c.tenor.com/oUaU9MLofEcAAAAM/where-are-you-location.gif' id = "imaag"/></> : <iframe width="100%" height="400px" id="gmap_canvas" src={`https://maps.google.com/maps?q=${map}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>}
    
    </div>
    </>
  )
}


