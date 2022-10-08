import React from 'react';
import './CreateTodoButtom.css';

function CreateTodoButtom(props) {
    const onCLickButton = (msg) => {
        alert(msg);
    };
    

    return (
        <button className="CreateTodoButtom" onClick={() => 
            onCLickButton('Modal')}
        >
            +
            </button>
    )
}
export { CreateTodoButtom };