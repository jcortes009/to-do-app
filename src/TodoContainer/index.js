import React from "react";
import './TodoContainer.css';



function TodoContainer({ children }) {
    return(
        <div className="TodoContainer">
            { children }
        </div>
    )
}

export { TodoContainer };