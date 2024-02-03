import { useRef, useContext} from "react";
import { TodoContext } from "../Todo";
import {Icon} from "../../Icon";
import { addTodo } from "../todo.actions";
import './AddTodo.scss';

export default function AddTodo(){

    const {dispatch} = useContext(TodoContext);
    const todoTitle = useRef();

    function handleSubmit(e){
        e.preventDefault();
        let title = todoTitle.current.value;
        if (!!title.trim()){
            dispatch(addTodo(title, new Date().getTime()) );
        }
        todoTitle.current.value = '';
    }

    return(
        <form action="" onSubmit={handleSubmit} className="add-todo-form">
            <input ref={todoTitle} id='add-form-input' type="text" placeholder="ADD NEW TASK"/>
            <button id="add-form-button" className="add-form icon-container">
                <Icon.Add />
            </button>
        </form>
    )

}