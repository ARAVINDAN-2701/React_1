// states are controlled by anyone

import React from "react";
class Statecomp extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"KEC",
            course:"mern"
        }
    }
    render(){
        return(
            <h1>State component,{this.state.name},course is,{this.state.course}</h1>
            
        )
    }
}
export default Statecomp;