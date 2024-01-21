import { useReducer, useRef, createContext } from "react";
import TodoList from "./TodoList";

let id = 0;
export const TodoContext = createContext(null);

export default function Todo(){
    const [todos, dispatch] = useReducer(reducer,[])
    const todoTitle = useRef()

    const addNewTodo = (e) => {
        e.preventDefault();
        const title = todoTitle.current.value;
        if (title) {
            dispatch({
                type: 'add',
                payload: {title: title, id: id++}
            });
        } 
        todoTitle.current.value = '';
    }

    const deleteTodo = (todo) => {
        dispatch({
            type: 'delete',
            payload: todo
        });
    }
    
    return(
        <div id="todo">
            <form action="" onSubmit={addNewTodo}>
                <input ref={todoTitle} id='input' type="text"/>
                <button>ADD</button>
            </form>
            
            <TodoContext.Provider value={deleteTodo}>
                <TodoList list={todos} /> 
            </TodoContext.Provider>
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
            return state.filter((todo)=>todo.id != payload.id)
        }
        default: {
            break
        }
    }

}