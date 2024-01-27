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
            <input ref={todoTitle} id='input' type="text" placeholder="Add New TODO"/>
            <button>+</button>
        </form>
    )

}