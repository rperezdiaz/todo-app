import { useRef, useContext} from "react";
import { TodoContext } from "../Todo";

export default function AddTodo(){

    const context = useContext(TodoContext);
    const todoTitle = useRef();

    function handleSubmit(e){
        e.preventDefault();
        let title = todoTitle.current.value;
        if (!!title.trim()){
            context.addNewTodo(title);
        }
        todoTitle.current.value = '';
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <input ref={todoTitle} id='add-form-input' className="add-form" type="text" placeholder="ADD NEW TASK"/>
            <button id="add-form-button" className="add-form">ADD</button>
        </form>
    )

}