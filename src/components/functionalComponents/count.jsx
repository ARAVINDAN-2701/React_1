
import { useReducer } from "react";
const value = {count:0};
const Functio = (number,updateType) =>{
    if(updateType.type === "sub"){
        return({count:number.count-1})
    }
    if(updateType.type === "add"){
        return({count:number.count+1})
    }
    if(updateType.type === "reset"){
        return({count:number.count=0})
    }
}
const COUNT = ()=> {
const [countval,updateVal] = useReducer(Functio,value)
    return(<div className="content">
        <h1>This page is for your login using reducer example</h1>
        <p>the value : {countval.count}</p>
        <button onMouseOver={()=>updateVal({type:"sub"})}>SUB</button>
        <button onMouseOver={()=>updateVal({type:"reset"})}>RESET</button>
        <button onMouseOver={()=>updateVal({type:"add"})}>ADD</button>
        
        </div>
    )
}
export default COUNT;