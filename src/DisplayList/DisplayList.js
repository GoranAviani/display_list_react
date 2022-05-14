import React from 'react';

const DisplayList = ({lista}) => {
    const processList = lista.map((item)=><p>{item}</p>)

    return(
        <div className="full-list">
            {processList}
        </div>
    )
}

export default DisplayList;