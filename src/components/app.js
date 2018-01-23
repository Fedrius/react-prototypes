import React from 'react';
import Table from './table';

const students = [
    {
        student: 'paulo',
        course: 'math',
        grade: 99
    },
    {
        student: 'teemo',
        course: 'math',
        grade: 99
    },
    {
        student: 'richardo',
        course: 'math',
        grade: 99
    }
];

const App = ()=>{
    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

export default App;