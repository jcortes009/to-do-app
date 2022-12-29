import React from 'react';

function EmptySearch(props) {
    return(
        <>
        <p>No results for { props.children }</p>
        </>
    )
}

export { EmptySearch };