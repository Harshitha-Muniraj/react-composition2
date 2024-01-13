import React, { useState } from "react";

const FirstToolTip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}  
      {showTooltip && (
        <div className="tooltiptext first">
          <div>
            <h2 className="tooltip">{text}</h2>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default FirstToolTip;