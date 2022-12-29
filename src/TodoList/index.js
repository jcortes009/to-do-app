import React from 'react';
import './TodoList.css'
// import { TodoItem } from './TodoItem.js';

function TodoList(props) {
    const renderFunction = props.children || props.render;
    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalToDos) &&
            props.onEmptyTodos()}
            {(!!props.totalToDos && !props.searchedToDos.length) && 
            props.onEmptySearch(props.searchText)}

            <ul>
                {!props.loading && props.searchedToDos.map(renderFunction)}
                
            </ul>
        </section>
    );
}

export { TodoList };