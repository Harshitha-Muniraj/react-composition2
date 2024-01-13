import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import axios from 'axios'
import { fetchlorem,request_fail,request_start,data_fetching } from '../redux/actions/FectingAction'
const FetchData = () => {
    const {loading,data,error}=useSelector(state=>state)
    console.log("data",data)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchlorem())

    },[])
  return (
    <div className='content' >
        <h1>Redux Api call</h1>
        <div className='container'>
        {
            data?.split(".").map((item,i)=>{
                return <div key={i} className='card'>{item}</div>
            })
          
        }
        </div>
       
    </div>
  )
}

export default FetchData