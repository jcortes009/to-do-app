import React from 'react';
import { useTodos } from './useTodos.js';
import { TodoContainer } from '../TodoContainer/index.js';
import { TodoHeader } from '../TodoHeader/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';
import { LoadingTodos } from '../LoadingTodos/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButtom } from '../CreateTodoButtom/index.js';



function App() {
  const {
    error, 
    loading, 
    searchedToDos, 
    completeToDo, 
    deleteToDo,
    openModal,
    setOpenModal,
    totalToDos, 
    completedToDos,
    searchValue, 
    setSearchValue,
    addToDo, 
  } = useTodos()

  return (
    <React.Fragment>

    {!!openModal && (
                  
              <TodoContainer>
                <TodoForm addToDo={ addToDo }
                setOpenModal={ setOpenModal }
                />
              </TodoContainer>
          )}
          
          <TodoHeader>
          <TodoCounter 
          totalToDos={totalToDos} 
          completedToDos={completedToDos}
          />
          <TodoSearch
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
          </TodoHeader>
          
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
  );
}

export default App ;
