import React, { useState } from "react";
import ToDo from "./ToDoItem";

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
        console.log(id);
        event.preventDefault();
    }

    function deleteItem(id){
        setClicks(clicks.filter((item, index) => {
              return index !== id;
          }));
    }

    return(
        <div>
            <h1>To-Do App</h1>
            <form>
                <input onChange={handleItem} name="item" type="text" placeholder="Add item" value={item}></input>
                <button onClick={handleSubmit}>Add</button>
            </form>
            <ul>
                {clicks.map((click,index)=>{
                    return(<ToDo 
                        key={click.id}
                        id={click.id}
                        index={index} 
                        todo={click.todo}
                        onChecked={deleteItem}
                        />)
                })}
            </ul>
        </div>
    )
}

export default App;