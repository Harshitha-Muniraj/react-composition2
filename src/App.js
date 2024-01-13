import React,{useState} from "react";
import './App.css'
import Modal from "./component/Modal";


const App = () => {

  let[show,setShow]=useState(false)

  const displayModal=()=>{

    setShow(true)
  }


  const onClose=()=>{

    setShow(false)
  }
  return (
    <div>
       
        <button onClick={displayModal}className="show-card-btn">Show Modal</button>
        { show ? 
        <Modal show={show} onClose={onClose}/>
        : ""
        }
    </div>
  )
}

export default App

