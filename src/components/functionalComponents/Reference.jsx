import { useEffect, useRef } from "react";
import { useState} from "react";

const UseRef =()=>{
    const [batchsize,updateBatch] = useState(0)
    const prevBatch =useRef(batchsize);
    useEffect(
        ()=>{
            prevBatch.current=batchsize

        },[batchsize]
    )
    return(
        <>
        <input type="text" onChange={(event)=>{
            updateBatch(event.target.value)
        }}/>
        <h1>current: {batchsize} :::: prev : {prevBatch.current}</h1></>
    )

}
export default UseRef;