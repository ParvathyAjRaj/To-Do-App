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
        <div className="container">
            <h1 className="heading">To-Do App</h1>
            <form className="form">
                <input className="box" onChange={handleItem} name="item" type="text" placeholder="Add item" value={item}></input>
                <button className="add" onClick={handleSubmit}>Add</button>
            </form>
            <div className="allList">
                <ul className="unorderedList">
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
            
        </div>
    )
}

export default App;