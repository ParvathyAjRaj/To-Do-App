import React, { useState } from "react";

function ToDo(props){

    const [isDone,setIsDone] = useState(false);

    // function handleDelete(){
    //     console.log("in todo comp -> asked to delete");

    // }
    
    function handleClick(){
        setIsDone(!isDone);
    }    

    return(
        <div >
            <li style={{textDecoration: isDone?"line-through":"none"}} key={props.id}>{props.todo}</li>
            <button onClick={handleClick} key={props.id}>Done</button>
            <button onClick={()=>{props.onChecked(props.index)}} key={props.id}>Delete</button>
            {/* <button onClick={handleDelete}>Delete</button> */}
        </div>
    )
}

export default ToDo;