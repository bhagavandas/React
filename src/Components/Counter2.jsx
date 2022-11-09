import {react,Component}from "react"
    class HoverAndIncrement extends Component{
        constructor(){
            super();
            this.state = {counter:0}
        }
        handleCounter = () => {
            this.setState({
                counter:this.state.counter+1
            })
        }
        render(){
            return(
                <div>
                   
                    
                    <p>{this.state.counter}</p>
                    
                     <div style={{width:"250px", height:"250px", backgroundColor:"green", alignItems:"center",justifyItems:"center"}} onMouseOver={this.handleCounter}></div> 
                     <h2>Calculator for Add & Subtract</h2>
                     <div>
               
            </div>
                 </div>

              
            )
        }

    }
    export default HoverAndIncrement;