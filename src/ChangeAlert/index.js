import React from 'react';
import { useStorageListener } from './useStorageListener';
import './withStorageListener.css'

function ChangeAlert({ sync }) {
    const { show, toggleShow } = useStorageListener(sync)
    if(show) {
        return (
            <div className='on-change'>
           <div className='on-change-container'>
           <p>Your ToDo list changed</p>
            <button className='on-change-button'
                onClick={ toggleShow }
            ></button>
           </div>
            </div>
        )
    } else{ 
        return null
    }
}



export { ChangeAlert }