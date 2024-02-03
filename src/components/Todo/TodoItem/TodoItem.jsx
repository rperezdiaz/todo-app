import { useState, useContext,useRef, memo} from "react";
import { TodoContext } from "../Todo";
import { Icon } from "../../Icon";
import { deleteTodo, editTodoTitle, toggleTodoDone } from "../todo.actions";
import './TodoItem.scss';

function TodoItem({id, title,isDone}){
    const [hovering, setHovering] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const {dispatch} = useContext(TodoContext);
    const editTitleRef = useRef();

    console.log(title)


    const handleDone = () =>{
        dispatch(toggleTodoDone(id, !isDone));
    };

    const submitEdit = (e) => {
        e.preventDefault();
        if(editTitleRef.current.value.trim()){
            dispatch(editTodoTitle(id, editTitleRef.current.value))
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
                className={ `checkbox icon-container ${isDone? 'checkbox-checked': ''}`} 
                onClick={handleDone} 
                role="button" >
                {
                    isDone ? <Icon.Checked /> : <Icon.Unchecked />
                }
                </div>
                {
                    isEditing ? 
                    <form onSubmit={submitEdit}>
                        <input ref={editTitleRef} type="text" defaultValue={title} autoFocus onBlur={handleOnBlur}/>
                    </form> 
                    : 
                    <div 
                    className={`todo-title ${isDone? 'title-checked' : ''}`}
                    onDoubleClick={handleDblClick}>
                        {title}
                    </div>
                }
            </div>
            <button className={`delete-todo icon-container`} onClick={()=>{dispatch(deleteTodo(id))}}>
                { hovering ? <Icon.Trashcan />: null}
            </button>
        </li>
        
    );
}

export default memo(TodoItem);