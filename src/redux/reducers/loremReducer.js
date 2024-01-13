import { STARTING_REQUEST,DATA_FETCH,FAILURE_REQUEST } from "../actions/actionTypes";

const initialstate={
    loading:false,
    data:[],
    error:""
}

export const loremReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case STARTING_REQUEST: return {...state,loading:true}
        case DATA_FETCH:return{...state,data:action.payload,loading:false}
        case FAILURE_REQUEST:return {...state,error:action.payload}
        default:return state
        
    }
}