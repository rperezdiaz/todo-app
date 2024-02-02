import { useReducer, createContext } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";

let id = 0;
export const TodoContext = createContext(null);

export default function Todo(){
    const [todos, dispatch] = useReducer(todoReducer,[{title:"Learn React", id:-1, isDone:false}]);

    const addNewTodo = (title) => {
        if (title) {
            dispatch({
                type: 'add',
                payload: {title: title, id: id++, isDone:false}
            });
        } ;
    }

    const deleteTodo = (todo) => {
        dispatch({
            type: 'delete',
            payload: todo
        });
    }

    const editTodoTitle = (id, newTitle) =>{
        dispatch({
            type: 'editTitle',
            payload: {id:id, title:newTitle}
        });
    }

    const toggleTodoDone = (id,isDone) =>{
        dispatch({
            type: 'toggleDone',
            payload: {id:id, isDone:isDone}
        });
    }

    const actions = {
        addNewTodo: addNewTodo,
        deleteTodo: deleteTodo,
        editTodoTitle: editTodoTitle,
        toggleTodoDone: toggleTodoDone
    }
    
    return(
        <div id="todo">
            <TodoContext.Provider value={{...actions}}>
                <AddTodo />
                <TodoList list={todos} /> 
            </TodoContext.Provider>
        </div>
    );
}
