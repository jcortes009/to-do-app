import React from 'react';
import './CreateTodoButtom.css';
import '../TodoContainer/TodoContainer.css';

function CreateTodoButtom(props) {
    const onCLickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
    

    return (
        <button 
        className="CreateTodoButtom" 
        onClick={onCLickButton}
        >
            +
            </button>
    )
}
export { CreateTodoButtom };