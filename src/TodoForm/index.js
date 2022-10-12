import React from 'react';
import  { TodoContext } from '../TodoContext/index.js';
import './TodoForm.css';

 function  TodoForm () {
    
  //create a nuw state for the ToDos
  const [newTodoValue, setNewTodoValue] = React.useState('');
  //function we need to add a ToDo and close the window
  const { 
          addToDo, 
          setOpenModal,
        } = React.useContext(TodoContext);
        
        //create a function to  update the satate of the new ToDo
        const onChange = (event) => {

          setNewTodoValue(event.target.value)

        };

        //function to create a new modal
        const onCancel = () => {
          setOpenModal(false);
        };

        //function to add a newToDo
        const onSubmit = (event) => {
          //preventDefault to prevet a reload of the window
          event.preventDefault();
          ///use the function to add a new ToDo
          addToDo(newTodoValue);
          //close the window
          setOpenModal(false);
          //reset the form
          setNewTodoValue('');
        };

            return (
              <form onSubmit={onSubmit}>
                <label>Write your New ToDo</label>

                <textarea
                value={newTodoValue}
                  onChange={onChange}
                  placeholder="New ToDo..."
                  />
                  <div className="TodoForm-buttonContainer">
                    <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                    >
                      Cancel
                    </button>
                    <button
                    className="TodoForm-button TodoForm-button--add "
                    type="submit"
                    >
                      Add
                    </button>
                  </div>

              </form>
            ) 
            
            
    
    }
 


export { TodoForm };
