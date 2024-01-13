import React from "react";
import './App.css';
import FirstToolTip from "./component/FirstToolTip";
import SecondToolTip from "./component/SecondToolTip";

const App = () => {
  return (
    <div className="container">
        
        <FirstToolTip text="This is a tooltip">
          <h2>Hover over me</h2>
        </FirstToolTip>
        <hr/>
        <SecondToolTip text="This is another tooltip">
          <p>Hover over me to see another tooltip</p>
        </SecondToolTip>
    </div>
  )
}

export default App