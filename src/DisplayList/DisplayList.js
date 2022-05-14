import React from 'react';
import './DisplayList.css'

const DisplayList = ({lista}) => {
    const processList = lista.map((item, i)=><div className="list-item" key={i}>{item}</div>)

    return(
        <div className="full-list">
            {processList}
        </div>
    )
}

export default DisplayList;