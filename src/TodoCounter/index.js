import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalToDos,
    completedToDos}) {

    return(

        <section>
            <h1>Hello!</h1>
            <h2 className ="TodoCounter">You've completed {completedToDos} of {totalToDos} ToDos</h2>
        </section>
    )
}
export { TodoCounter };