import React from 'react';

const DisplayList = ({lista}) => {
    const processList = lista.map((item, i)=><div key={i}>{item}</div>)

    return(
        <div className="full-list">
            {processList}
        </div>
    )
}

export default DisplayList;