import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import './TodoCounter.css';

function TodoCounter() {

    const { totalToDos, completedToDos} = React.useContext(TodoContext)

    return(

        <header>
            <h1>Hello!</h1>
            <h2 className ="TodoCounter">You've completed {completedToDos} of {totalToDos} ToDos</h2>
        </header>
    )
}
export { TodoCounter };