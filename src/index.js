import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = ()=> Math.floor((Math.random() * 1000) + 1);

const user = {
    name: 'paul',
    luckyNumber: luckyNumber()
}

const greeting = (theObj)=> {
    const divElement = (
        <div className='container'>
            <h1>helloooooooooo {theObj.name}</h1>
            <h2 className='text-muted'>your lucky number is: {theObj.luckyNumber}</h2>
        </div>
    );
    return divElement;
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);