import React, { useState } from 'react'
import {GoLocation} from "react-icons/go"
import { SearchCard } from '../SearchCard/SearchCard';
import {useDispatch } from 'react-redux';
import {cities} from "../Cities/cities";
import { addCor, addMap } from '../../Redux/action';

export const Input = () => {
  const [value,setValue] = useState("");
  const [show,setShow] = useState(true);
  const [searchData,setSearchData] = useState([]);
  const dispatch = useDispatch();
  let id;


  const changeInput = (inp)=>{

    setValue(inp);
    setShow(true);
    if(id){
      clearTimeout(id);
    }

    
       id = setTimeout(()=>{
       let filterData = [];
       cities.forEach((el) => {
          if(el.name.toLocaleLowerCase().includes(inp.toLocaleLowerCase())){
            filterData.push(el);
          }
       });

      
       setSearchData([...filterData])
      },800)
  }


  const onClickCity = (el)=>{
    setValue(`${el.name}, ${el.state}`)
    dispatch(addMap(el.name));
    dispatch(addCor({
      latitude:+(el.lat),
      longitude:+(el.lon)
    })) 
    setShow(false);
  }

  

  return (
    <div>
        <br />
        <div className="input-icons">
            <div>
      <GoLocation className='ii'/>
            </div>
      <input type="text" value={value}  id = "inp" placeholder='Search' onChange={(e)=>{changeInput(e.target.value)}} color='grey'/>
        </div>
            
            {/* {searchData.length == 0 ? "" :   } */}
          {searchData.length !== 0 && show == true && <div className='optionBox'>
              {searchData.map((el,i)=>{
               return <div key={i} onClick= {()=>{onClickCity(el)}}>
                 <SearchCard  city= {el.name} state= {el.state}/>
               </div>
              })}
            </div>}
    </div>
  )
}


