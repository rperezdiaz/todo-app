import { useState, useContext, useReducer} from "react";
import { TodoContext } from "../Todo";
import { Icon } from "../../Icon";

export default function TodoItem({item}){
    const [todo ,dispatch] = useReducer(todoItemReducer, item);
    const [hovering, setHovering] = useState(false);
    const context = useContext(TodoContext);

    const handleChange = () =>{
        dispatch({
            type: 'check',
            payload: !todo.checked
        })
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
                <div className={ `checkbox icon-container ${todo.checked? 'checkbox-checked': ''}`} onClick={handleChange} role="button" >
                {
                    todo.checked ? <Icon.Checked /> : <Icon.Unchecked />
                }
                </div>
                <span className={`todo-title ${todo.checked? 'title-checked' : ''}`}>
                    {item.title}
                </span>
            </div>
            
            <button className={`delete-todo icon-container`} onClick={()=>context.deleteTodo(item)}>
                { hovering ? <Icon.Trashcan />: null}
            </button>
        </li>
        
    );
}

const todoItemReducer = (state, action) =>{
    const{type,payload} = action;
    switch(type){
        case 'check':{
            return {...state, checked:payload};
        }
        case 'edit':{
            break;
        }
        default: {
            break;
        }
    }
}