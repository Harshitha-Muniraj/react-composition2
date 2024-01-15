import React from "react";
import './App.css';
import ToolTip from "./ToolTip";


const App = () => {
  return (
    <div className="container">
        
        <ToolTip text="This is a tooltip">
          <h2>Hover over me</h2>
        </ToolTip>
        <hr/>
        <ToolTip text="This is another tooltip">
          <p>Hover over me to see another tooltip</p>
        </ToolTip>
    </div>
  )
}

export default App