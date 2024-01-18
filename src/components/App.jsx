import React, { useState } from "react";

function App(){

    const[item,setItem] = useState("");
    const [clicks,setClicks] = useState([]);
    const [id,setId] = useState(0);

    function handleItem(event){
        setItem(event.target.value);
    }

    function handleSubmit(event){
        setId(id+1);
        setClicks([...clicks,{id:id,todo:item}]);
        setItem("");
        event.preventDefault();
    }

    

    return(
        <div>
            <h1>To-Do App</h1>
            <form>
                <input onChange={handleItem} name="item" type="text" placeholder="Add item" value={item}></input>
                <button onClick={handleSubmit}>Add</button>
            </form>
            <ul>
                {clicks.map((click)=>{
                    return(
                        <li key={click.id}>{click.todo}</li>
                    )
                    })}
            </ul>
        </div>
    )
}

export default App;