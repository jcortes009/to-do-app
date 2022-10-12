import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import { TodoContainer } from '../TodoContainer/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';
import { LoadingTodos } from '../LoadingTodos/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButtom } from '../CreateTodoButtom/index.js';


function AppUI () {
 const {
  error, 
  loading, 
  searchedToDos, 
  completeToDo, 
  deleteToDo,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext)

    return (
        <React.Fragment>

{!!openModal && (
              
          <TodoContainer>
            <TodoForm />
          </TodoContainer>
      )}
      
      <TodoCounter />
      <TodoSearch />
      
        <TodoList>
        { error && <p>OOPSS! There was an error, please refresh the browser</p>}
        { loading && <LoadingTodos />}
        { (!loading && !searchedToDos.length) && <EmptyTodos />}
        { (!loading && searchedToDos.length) && <p>Your task today</p>}


        {searchedToDos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() =>completeToDo(todo.text)} 
        onDelete={() =>deleteToDo(todo.text)} 
        />
        ))}
      </TodoList>
      
      <CreateTodoButtom 
      setOpenModal={ setOpenModal }
      />
    </React.Fragment>
    )
}

export { AppUI };