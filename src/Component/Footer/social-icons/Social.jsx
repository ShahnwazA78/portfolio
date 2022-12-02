import React from "react";

import "./Social.css";

const Social = ({ icon, color, link }) => {
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: color }}
            onClick={()=>{
                window.open(link,"_blank")
            }}
        >
            {icon}
        </div>
    );
};

export default Social;
