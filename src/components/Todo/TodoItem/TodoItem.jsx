import { useState, useContext,useRef, memo} from "react";
import { TodoContext } from "../Todo";
import Button from "../../common/Button";
import { Icon } from "../../Icon";
import { deleteTodo, editTodoTitle, toggleTodoDone } from "../todo.actions";
import './TodoItem.scss';

function TodoItem({id, title,isDone}){
    console.log(title)

    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TodoContext);
    const editTitleRef = useRef();

    const handleDone = () =>{
        dispatch(toggleTodoDone(id, !isDone));
    };

    const submitEdit = (e) => {
        e.preventDefault();
        if(editTitleRef.current.value.trim()){
            dispatch(editTodoTitle(id, editTitleRef.current.value))
        };
        setIsEditing(false);
    }
    
    const handleEdit = () => {
            setIsEditing(true);
    }

    const handleOnBlur = () =>{
        setIsEditing(false)
    }

    return(
        <div className="todo-item-container">
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
                    onDoubleClick={handleEdit}>
                        {title}
                    </div>
                }
            </div>
            <Button className={`edit-todo icon-container btn-icon`} onClickFunc={handleEdit}>
                <Icon.Edit />
            </Button>
            <Button className={`delete-todo icon-container btn-icon`} onClickFunc={()=>{dispatch(deleteTodo(id))}}>
                <Icon.Trashcan />
            </Button>
        </div>
        
    );
}

export default memo(TodoItem);