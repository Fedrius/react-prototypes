import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        };
    }

    render(){
        const {status, start, elapsed} = this.state;

        return(
            <div>
                <h1>{elapsed}</h1>
                <p>{status}</p>
            </div>
        )
    }

}

export default Stopwatch