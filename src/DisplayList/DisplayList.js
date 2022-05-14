import React from 'react';

const DisplayList = ({lista}) => {
    console.log(lista)
    const processList = lista.map((item)=><p>{item}</p>)

    return(
        <div>
            {processList}
        </div>
    )
}

export default DisplayList;