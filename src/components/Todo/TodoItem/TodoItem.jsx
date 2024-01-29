import { useState, useContext} from "react";
import { TodoContext } from "../Todo";
import { Icon } from "../../Icon";

export default function TodoItem({item}){
    
    const [hovering, setHovering] = useState(false)
    const [checked, setChecked] = useState(false);
    const context = useContext(TodoContext)

    const handleChange = () =>{
        setChecked(!checked);
    };

    const handleMouseEnter = () => {
        setHovering(true);
    }
    const handleMouseLeave = () => {
        setHovering(false);
    }

    return(
        <li 
        className="todo-item-container" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <div className="checkbox-title-container" >
                <div className={ `checkbox icon-container ${checked? 'checkbox-checked': ''}`} onClick={handleChange} >
                {
                    checked ? <Icon.Checked /> : <Icon.Unchecked />
                }
                </div>
                <span className="todo-title">{
                    !checked? item.title : <s>{item.title}</s>}
                    </span>
            </div>
            
            <button className={`delete-todo icon-container`} onClick={()=>context.deleteTodo(item)}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg> */}
                { hovering ? <Icon.Trashcan />: null}
                
            </button>
        </li>
        
    );
}