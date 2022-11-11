import React, { Component } from 'react';

class CalParent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                 <div className="Result"> Result:{this.props.result.map(res => ' ' + res + ' ')} </div>
            </div>
           
           
        );
    }
}

export default CalParent;