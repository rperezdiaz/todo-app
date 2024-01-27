import { useState, useContext} from "react";
import { TodoContext } from "../Todo";

export default function TodoItem({item}){
    
    const [checked, setChecked] = useState(false);
    const context = useContext(TodoContext)

    const handleChange = () =>{
        setChecked(!checked);
    };

    return(
        <li className="todo-item-container" onClick={handleChange}>
            <div className="checkbox-title-container">
                <input type="checkbox" className="checkbox" onChange={handleChange}/>
                <label>{!checked? item.title : <s>{item.title}</s>}</label>
            </div>
            
            <button className="delete-todo" onClick={()=>context.deleteTodo(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </li>
        
    );
}