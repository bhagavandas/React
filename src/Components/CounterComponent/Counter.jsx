import {react,Component}from "react"
    class Counter extends Component{
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
                <div style={{alignItems:'center'}}>
               
                    <h1>
                        Counter Component
                    </h1>
                    <p>
                        {
                            this.state.counter
                        }
                    </p>
                    <button onClick={this.handleCounter}>click</button>
                    
                </div>
               
            )
        }

    }
    export default Counter;