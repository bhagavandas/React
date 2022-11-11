import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Parent extends Component {
   
        constructor(props){
            super(props);
            
        }
    render() {
        return (
            <div>
                <p>This is Parent Component</p>
                <p>{this.props.childProperty}</p>
                <p>{this.props.calculatorProperty}</p>
            
            </div>
        );
    }
}


export default Parent;