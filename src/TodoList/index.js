import React from 'react';
import './TodoList.css'
// import { TodoItem } from './TodoItem.js';

function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };