import React from 'react'
import {GoLocation} from "react-icons/go"
export const Input = () => {
  return (
    <div>
        <br />
        <div className="input-icons">
            <div>
      <GoLocation className='ii'/>
            </div>
      <input type="text" id = "inp" placeholder='Search' color='grey'/>
        </div>
            
    </div>
  )
}


