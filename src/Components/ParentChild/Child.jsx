import React, { Component } from 'react';
import Calculator from '../CounterComponent/Calci';
import CalParent from '../CounterComponent/CalParent';
import Parent from './Parent';

class Child extends Component {
    constructor(){
        super();
        this.state = {childValue:"This is child state value"}
        this.state = {calculatorProperty:"Calculator state value"}
    }

    render() {
        return (
            <div>
                {/* <p>THis is Child Component</p>
                <Parent childProperty={this.state.childValue}/> */}
                <CalParent calculatorProperty={this.props.result}/>
                
            </div>
        );
    }
}

export default Child;