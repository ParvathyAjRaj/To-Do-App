import React, { useState } from "react";

function ToDo(props){

    const [isDone,setIsDone] = useState(false);

    function handleClick(){
        setIsDone(!isDone);
    }    

    return(
        <div className="eachitem">
            <li className="list" style={{textDecoration: isDone?"line-through":"none"}} key={props.id}>{props.todo}</li>
            <button className="done" onClick={handleClick} key={props.id}>Done</button>
            <button className="delete" onClick={()=>{props.onChecked(props.index)}} key={props.id}>Delete</button>
        </div>
    )
}

export default ToDo;