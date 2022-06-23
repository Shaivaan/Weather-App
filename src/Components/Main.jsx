// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import {Input} from './Input/Input';
import { Gelocation } from './Gelocation/Gelocation';

export const Main=()=> {

    const [ordinate,setOrdinate] = useState();
    
    useEffect(()=>{
        Gelocation(setOrdinate);
    },[])


    console.log(ordinate)
    
    const getClientCor = ()=>{
    
  }

  return (
    <div className="App">
      <Input/>
     {/* {console.log(Gelocation())} */}
    </div>
  );
}


