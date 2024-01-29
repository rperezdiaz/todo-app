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
                <div className={ `checkbox icon-container ${checked? 'checkbox-checked': ''}`} onClick={handleChange} role="button" >
                {
                    checked ? <Icon.Checked /> : <Icon.Unchecked />
                }
                </div>
                <span className={`todo-title ${checked? 'title-checked' : ''}`}>
                    {item.title}
                </span>
            </div>
            
            <button className={`delete-todo icon-container`} onClick={()=>context.deleteTodo(item)}>
                { hovering ? <Icon.Trashcan />: null}
            </button>
        </li>
        
    );
}