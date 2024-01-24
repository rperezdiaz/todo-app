import { useState, useContext} from "react";
import { TodoContext } from "./Todo";
import Trash from "../assets/Trash.svg"


export default function TodoItem({item}){
    
    const [checked, setChecked] = useState(false);
    const deleteTodo = useContext(TodoContext)

    function handleChange(){
        setChecked(!checked);
    };

    return(
        <div className="todo-item">
            <input type="checkbox" onChange={handleChange}/>
            <span>{!checked? item.title : <s>{item.title}</s>}</span>
            <button className="button" onClick={()=>deleteTodo(item)}><img src={Trash} alt="" /></button>
        </div>
        
    );
}