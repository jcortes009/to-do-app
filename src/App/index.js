import React from 'react';
import { useTodos } from './useTodos.js';
import { TodoContainer } from '../TodoContainer/index.js';
import { TodoHeader } from '../TodoHeader/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoError } from '../TodoError/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';
import { EmptySearch } from '../EmptySearch/index.js';
import { LoadingTodos } from '../LoadingTodos/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButtom } from '../CreateTodoButtom/index.js';
import { ChangeAlert } from '../ChangeAlert/index.js';



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
    sinchronizeTodos,
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
          
          <TodoHeader loading={ loading }>
          <TodoCounter 
          totalToDos={totalToDos} 
          completedToDos={completedToDos}
          />
          <TodoSearch
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
          </TodoHeader>
          
            <TodoList
            error={ error }
            loading={ loading }
            searchedToDos={ searchedToDos }
            totalToDos={ totalToDos }
            onError={ () => <TodoError /> }
            onLoading={ () => <LoadingTodos /> }
            onEmptyTodos={ () => <EmptyTodos /> }
            searchText={ searchValue }
            onEmptySearch={
              (searchText) => <EmptySearch >{ searchText }</EmptySearch>}
            // render={todo => (
            //   <TodoItem 
            //   key={todo.text} 
            //   text={todo.text}
            //   completed={todo.completed}
            //   onComplete={() =>completeToDo(todo.text)} 
            //   onDelete={() =>deleteToDo(todo.text)} 
            //   />
            // )}
             >
              {todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() =>completeToDo(todo.text)} 
              onDelete={() =>deleteToDo(todo.text)} 
              />
            )}
             </TodoList>

           
          
          <CreateTodoButtom 
          setOpenModal={ setOpenModal }
          />

          <ChangeAlert
            sync={ sinchronizeTodos }
          />

        </React.Fragment>
  );
}

export default App ;
