import React from 'react';
import './EmptyTodos.css'


function EmptyTodos () {
    return <div className="EmptyList">
        <p>Tap the blue button to start...</p>
        <div className="EmptyList-image"></div>
        </div>
}

export { EmptyTodos }