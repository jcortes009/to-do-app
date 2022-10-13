import React from "react";
import './LoadingTodos.css'

function LoadingTodos () {
    return <div className="LoadingTodos">
        <p>Please wait, we are loading ...</p>

        <div  className="LoadingTodos-image--container">
        <div className="LoadingTodos-image1"></div>
        <div className="LoadingTodos-image2"></div>
        <div className="LoadingTodos-image3"></div>
        </div>
        
    </div>
}


export { LoadingTodos }