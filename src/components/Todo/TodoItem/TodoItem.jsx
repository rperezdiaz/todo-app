import { useState, useContext, useReducer, useRef} from "react";
import { TodoContext } from "../Todo";
import { Icon } from "../../Icon";

export default function TodoItem({item}){
    const [todo ,dispatch] = useReducer(todoItemReducer, item);
    const [hovering, setHovering] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const context = useContext(TodoContext);
    const editedTitle = useRef()

    const handleChange = () =>{
        dispatch({
            type: 'check',
            payload: !todo.checked
        })
    };

    const handleDblClick = () => {
        setIsEditing(!isEditing);
    }

    const submitEdit = () => {
        if(editedTitle.current.value.trim()){
            dispatch({
            type: 'edit',
            payload: editedTitle.current.value
        });
        }
        setIsEditing(!isEditing);
    }

    const handleMouseOver = () => {
        setHovering(true);
    }
    const handleMouseLeave = () => {
        setHovering(false);
    }

    return(
        <li 
        className="todo-item-container" 
        onMouseOver={handleMouseOver} 
        onMouseLeave={handleMouseLeave}>
            <div className="checkbox-title-container" >
                <div 
                className={ `checkbox icon-container ${todo.checked? 'checkbox-checked': ''}`} 
                onClick={handleChange} 
                role="button" >
                {
                    todo.checked ? <Icon.Checked /> : <Icon.Unchecked />
                }
                </div>
                {
                    isEditing ? 
                    <form onSubmit={submitEdit}>
                        <input ref={editedTitle} type="text" defaultValue={todo.title}/>
                    </form> 
                    : 
                    <div 
                    className={`todo-title ${todo.checked? 'title-checked' : ''}`}
                    onDoubleClick={handleDblClick}>
                        {todo.title}
                    </div>
                }
            </div>
            <button className={`delete-todo icon-container`} onClick={()=>context.deleteTodo(todo)}>
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
            return {...state, title:payload}
        }
        default: {
            break;
        }
    }
}