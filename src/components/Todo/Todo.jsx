import { useReducer, createContext } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";

export const TodoContext = createContext(null);

export default function Todo(){
    const [todos, dispatch] = useReducer(todoReducer,[{title:"Learn React", id:-1, isDone:false}]);

    return(
        <div id="todo">
            <TodoContext.Provider value={dispatch}>
                <AddTodo />
                <TodoList list={todos} /> 
            </TodoContext.Provider>
        </div>
    );
}
