import { FAILURE_REQUEST,DATA_FETCH,STARTING_REQUEST } from "./actionTypes";
import axios from "axios";

export const request_start=()=>{
    return{
        type:STARTING_REQUEST
    }
}

export const data_fetching=(data)=>{
    return{
        type:DATA_FETCH,
        payload:data
    }
}

export const request_fail=(err)=>{
    return{
        type:FAILURE_REQUEST,
        payload:err
    }
}

export const fetchlorem=()=>{
    return async (dispatch) => {
        dispatch({type:STARTING_REQUEST});
    
        try {
          const response = await axios.get("https://baconipsum.com/api/?type=all-meat&paras=1");
          const data = response.data[0];
          dispatch({ type: DATA_FETCH, payload: data });
        } catch (error) {
          dispatch({ type: FAILURE_REQUEST, payload: error.message });
        }
      };
    };