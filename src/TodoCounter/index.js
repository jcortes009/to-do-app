import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalToDos,
    completedToDos, loading}) {

    return(

        <section className={`${!!loading && "TodoCounter--loading"}`}>
            <h1>Hello!</h1>
            <h2 className ="TodoCounter">You've completed {completedToDos} of {totalToDos} ToDos</h2>
        </section>
    )
}
export { TodoCounter };