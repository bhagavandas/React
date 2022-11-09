import React,{Component}from "react";
    class Calculator extends Component{
        constructor(){
            super();
            this.state = {inputValue:null, newValue:null, isAction:null}
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
          this.setState({result: result});

        }
       
        render(){
          return(
            <div>
              <h1>Calculator</h1>
              <input style={{margin:'10px'}} value={this.state.inputValue} placeholder="enter value" onChange={this.setFirstInputValue} />
              <input style={{margin:'10px'}} value={this.state.newValue} placeholder="enter value" onChange={this.setSecondInputValue} />
             
              <button style= {{margin:'10px'}} onClick={() => this.calculate('sum')}>Addition</button>
              <button style= {{margin:'10px'}} onClick={() => this.calculate('sub')}>Subtraction</button>
              <button style= {{margin:'10px'}} onClick={() => this.calculate('mult')}>Multiplication</button>
              <button style= {{margin:'10px'}} onClick={() => this.calculate('div')}>Division</button>
              
            <div style= {{margin:'10px', color:'blue', fontSize:'30px', justifyContent:'center'}} >Result: {this.state.result}
            </div>
          </div>
          )
        }
      }
      export default Calculator;

