import React from "react";
import "../../css/propComponent.css"

class State2cmp extends React.Component{
    constructor(){
        super()
        this.State ={
            type:"image",
            state:"statecomponent"
        }
    }
    chState = () =>{
       console.log("kec")// useState should be used when we come to hooks
    }
    render(){
        return(
            <div className="statecomp">
                <p>{this.State.type}, using ,{this.State.state}</p>
                <p>the name is changed to{this.State.type} to {this.chState()}</p>
                <button onMouseOver ={this.chState}>Click me to change the type state</button>
                
            </div>
        )
    }
}
export default State2cmp;