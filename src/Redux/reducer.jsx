import { ADD_COR } from "./action"

const init_store = {
    cor:null,
}

export const reducer = (store = init_store,{type,payload})=>{
    if(type === ADD_COR){
        return {...store,cor:payload}
    }else{
        return store;
    }
}