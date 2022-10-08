import React from 'react';
import { TodoImage } from './TodoImage.js';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButtom } from './CreateTodoButtom.js';

// import './App.css';

const toDos = [
  {text: 'Shop onion',completed: false},
  {text: 'Take the class animations with css',completed: false},
  {text: 'Finish the introduction to react',completed: true}
]

function App() {
  return (
    <React.Fragment>
      <TodoImage />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {toDos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed} 
        />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
