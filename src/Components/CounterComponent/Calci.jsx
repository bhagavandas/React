import React,{Component}from "react";
import Parent from "../ParentChild/Parent";
import "./Calculator.css"
import CalParent from "./CalParent";
    class Calculator extends Component{
        constructor(){
            super();
            this.state = {inputValue:null, newValue:null, isAction:null,result:[]}
        }
        setFirstInputValue = (e) => {
            let value = e.target.value;
            this.setState({inputValue : value});
        }

        setSecondInputValue = (e) => {
          let value = e.target.value;
          this.setState({newValue : value});
      }

        calculate = (type) => {
          let result;
          let inputValue = Number(this.state.inputValue);
          let newValue = Number(this.state.newValue);
          
         
          switch(type){
            case 'sum':
              result= inputValue + newValue
              break;
            case 'sub':
              result= inputValue - newValue
              break;
            case 'mult':
              result= inputValue * newValue
              break;
            case 'div':
              result= inputValue / newValue
              break;
            

          }
          let resultArray = this.state.result;
          resultArray.push(result);
          this.setState({result: resultArray});

        }

        reset = () => {
          this.setState({inputValue:"", newValue:"", result:[]})
        }
       
        render(){
          return(
            <div>
              
              <h1>Calculator</h1>
              <input  value={this.state.inputValue} placeholder="enter value" onChange={this.setFirstInputValue} />
              <input  value={this.state.newValue} placeholder="enter value" onChange={this.setSecondInputValue} />
             
              <button  onClick={() => this.calculate('sum')}>Addition</button>
              <button  onClick={() => this.calculate('sub')}>Subtraction</button>
              <button  onClick={() => this.calculate('mult')}>Multiplication</button>
              <button  onClick={() => this.calculate('div')}>Division</button>
              <button  onClick={this.reset}>Clear</button>
              
            {/* <div className="Result" >Result: {this.state.result.map(res => '' +res+'')}
            </div> */}
            
        
            <CalParent result = {this.state.result}/>

          </div>
          )
        }
      }
      export default Calculator;

