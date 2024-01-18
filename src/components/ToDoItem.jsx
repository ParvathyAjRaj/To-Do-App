import React, { useState } from "react";

function ToDo(props){

    const [isDone,setIsDone] = useState(false);

    function handleClick(){
        setIsDone(!isDone);
    }    

    return(
        <div >
            <li style={{textDecoration: isDone?"line-through":"none"}} key={props.id}>{props.todo}</li>
            <button onClick={handleClick}>Done</button>
        </div>
    )
}

export default ToDo;