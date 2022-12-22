import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {


    const {
  
        item: toDos,
        saveItem: saveToDos,
        loading,      
        error,
      
      } = useLocalStorage('TODOS_V1', []);
      
      //status of the search
      const [searchValue, setSearchValue] = React.useState('');
      
      const [openModal, setOpenModal] = React.useState(false);
      //how many toDos are completed
      const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
      //how many toDos or total amount of toDos
      const totalToDos =toDos.length;
      
      let searchedToDos = [];
      
        if(!searchValue.length >= 1) {
          searchedToDos = toDos;
        } else {
          searchedToDos = toDos.filter(toDo => {
            const todoText = toDo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
          });
        }
        
      //function to add a new ToDo
        const addToDo = (text) => {
          const newTodos = [...toDos]
          newTodos.push({
            completed: false,
            text,
          });
          //every time the user interacts with the app th ToDos will be save with the function save ToDos
          saveToDos(newTodos)
        }
        const completeToDo = (text) => {
          const todoIndex =toDos.findIndex( toDo => toDo.text === text);
          const newTodos = [...toDos]
          newTodos[todoIndex].completed = true;
          //every time the user interacts with the app th ToDos will be save with the function save ToDos
          saveToDos(newTodos)
        }
        const deleteToDo = (text) => {
          const todoIndex =toDos.findIndex( toDo => toDo.text === text);
          const newTodos = [...toDos]
          newTodos.splice(todoIndex, 1);
          //every time the user interacts with the app th ToDos will be save with the function saveToDos
          saveToDos(newTodos)
        }

    return {
       

            loading, 
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            addToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,

      

      };
}

export { useTodos };