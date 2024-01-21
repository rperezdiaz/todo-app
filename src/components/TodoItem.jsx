import { useState, useContext} from "react";
import { TodoContext } from "./Todo";


export default function TodoItem({item}){
    
    const [checked, setChecked] = useState(false);
    const deleteTodo = useContext(TodoContext)

    function handleChange(){
        setChecked(!checked);
    };

    return(
        <div>
            <input type="checkbox" onChange={handleChange}/>
            <span>{!checked? item.title : <s>{item.title}</s>}</span>
            <button onClick={()=>deleteTodo(item)}> x </button>
        </div>
        
    );
}