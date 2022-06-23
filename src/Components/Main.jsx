// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import {Input} from './Input/Input';
import { Gelocation } from './Gelocation/Gelocation';
import { Card } from './Card/Card';

export const Main=()=> {

    const [ordinate,setOrdinate] = useState();
    
    useEffect(()=>{
        getClientCor();
    },[])
    
    
    console.log(ordinate)
    
    const getClientCor = ()=>{
        Gelocation(setOrdinate);
  }

  return (
    <div className="App">
      <Input/>
      <Card/>
     {/* {console.log(Gelocation())} */}
    </div>
  );
}


