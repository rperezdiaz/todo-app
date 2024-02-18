import { createContext, useEffect } from "react";
import useLocalStorageReducer from "../../hooks/useLocalStorage";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";

export const TodoContext = createContext(null);

export default function Todo(){

    console.log('Todo.jsx rendered')

    const [todos, dispatch] = useLocalStorageReducer('todos',todoReducer,[{title:"My First Task!", id:-1, isDone:false}]);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    return(
        <div id="todo">
            <TodoContext.Provider value={dispatch}>
                <AddTodo />
                <TodoList todos={todos} /> 
            </TodoContext.Provider> 
        </div>
    );
}

