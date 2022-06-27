import { ADD_COR, ADD_MAP, ADD_TEMP, CUR_DAY } from "./action"

const init_store = {
    cor:null,
    map:null,
    temp:null,
    day:0
}

export const reducer = (store = init_store,{type,payload})=>{
    if(type === ADD_COR){
        return {...store,cor:payload};
    }else if(type === ADD_MAP){
        return {...store,map:payload};
    }else if(type === ADD_TEMP){
        return {...store,temp:payload}
    }else if(type === CUR_DAY){
        return {...store,day:payload}
    }
    else{
        return store;
    }
}