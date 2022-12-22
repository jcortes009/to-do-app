import React from "react";

function useLocalStorage (itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    
      //initial status of toDos
    const [item, setItem] = React.useState(initialValue);
    
    
      React.useEffect(() => {
        setTimeout(() => {
    
          try {
            
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
     
            setItem(parsedItem);
            setLoading(false);
    
          } catch(error) {
            setError(error);
          }
    
        }, 1500);
      
      }, []);
      
     
    //creates the function that will update the local storage
    const saveItem = (newItem) => {
    
      try {
          //covert to string all of them
      const stringifiedItem = JSON.stringify(newItem);
      //save them in the local storage
      localStorage.setItem(itemName, stringifiedItem);
      //update the status
      setItem(newItem);
      } catch(error) {
        setError(error);
      }
      };
    
    return {
      item,
      saveItem,
      loading,      
      error,      
    }
      
    
    
    }

    export { useLocalStorage };