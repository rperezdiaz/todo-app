import { useReducer, useRef } from "react";
import TodoList from "./TodoList";

 let id = 0;

export default function Todo(){
    const [todos, dispatch] = useReducer(reducer,[])
    const todoTitle = useRef()
   
    const addNewTodo = () => {
        const title = todoTitle.current.value;
        if (title) {
            dispatch({
                type: 'add',
                payload: {title: title, id: id++}
            });
        } 
        todoTitle.current.value = '';
    }
    
    return(
        <div id="todo">
            <input ref={todoTitle} id='input' type="text" />
            <button onClick={addNewTodo}>ADD</button>
            <TodoList list={todos} />       
        </div>
    );
}

function reducer(state, action){
    const {type, payload} = action;
    switch(type){
        case 'add': {
            const newState = [...state];
            newState.push(payload);
            return newState;
        }
        case 'delete': {
            break;
        }
        default: {
            break
        }
    }

}