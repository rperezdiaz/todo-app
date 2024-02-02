import { useState, useContext, useReducer, useRef} from "react";
import { TodoContext } from "../Todo";
import { Icon } from "../../Icon";
import './TodoItem.scss'

export default function TodoItem({todo}){
    const [hovering, setHovering] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const context = useContext(TodoContext);
    const editTitleRef = useRef();

    const handleDone = () =>{
        context.toggleTodoDone(todo.id, !todo.isDone);
    };

    const submitEdit = (e) => {
        e.preventDefault();
        if(editTitleRef.current.value.trim()){
            context.editTodoTitle(todo.id, editTitleRef.current.value)
        };
        setIsEditing(!isEditing);
    }

    const handleMouseOver = () => {
        setHovering(true);
    }
    const handleMouseLeave = () => {
        setHovering(false);
    }   
    
    const handleDblClick = () => {
        setIsEditing(!isEditing);
    }

    const handleOnBlur = () =>{
        setIsEditing(false)
    }

    return(
        <li 
        className="todo-item-container" 
        onMouseOver={handleMouseOver} 
        onMouseLeave={handleMouseLeave}>
            <div className="checkbox-title-container" >
                <div 
                className={ `checkbox icon-container ${todo.isDone? 'checkbox-checked': ''}`} 
                onClick={handleDone} 
                role="button" >
                {
                    todo.isDone ? <Icon.Checked /> : <Icon.Unchecked />
                }
                </div>
                {
                    isEditing ? 
                    <form onSubmit={submitEdit}>
                        <input ref={editTitleRef} type="text" defaultValue={todo.title} autoFocus onBlur={handleOnBlur}/>
                    </form> 
                    : 
                    <div 
                    className={`todo-title ${todo.isDone? 'title-checked' : ''}`}
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