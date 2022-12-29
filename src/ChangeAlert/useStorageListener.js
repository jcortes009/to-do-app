import React from 'react';


function useStorageListener( sync ) {
  //hook to  notify if you make a change  on your list  
        const [storageChange, setStorageChange] = React.useState(false);

            React.useEffect(() => {
                const onChange = (change) => {
                    if(change.key === 'TODOS_V1') {
                        // console.log('chages');
                        setStorageChange(true)
                    }
                };
                window.addEventListener('storage', onChange);

                return () => {
                    window.removeEventListener('storage', onChange); 
                }

            },[])
        const toggleShow = () => {
            sync();
            setStorageChange(false);
        };

        return {
          show: storageChange,
          toggleShow,
         };
    
}

export { useStorageListener }