import { ADD_COR, ADD_MAP } from "./action"

const init_store = {
    cor:null,
    map:null
}

export const reducer = (store = init_store,{type,payload})=>{
    if(type === ADD_COR){
        return {...store,cor:payload};
    }else if(type === ADD_MAP){
        return {...store,map:payload};
    }
    else{
        return store;
    }
}