import { useReducer, createContext } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";

let id = 0;
export const TodoContext = createContext(null);

export default function Todo(){
    const [todos, dispatch] = useReducer(reducer,[{title:"Learn React", id:-1, checked:false}]);

    const addNewTodo = (title) => {
        if (title) {
            dispatch({
                type: 'add',
                payload: {title: title, id: id++, checked:false}
            });
        } ;
    }

    const deleteTodo = (todo) => {
        dispatch({
            type: 'delete',
            payload: todo
        });
    }
    
    return(
        <div id="todo">
            <TodoContext.Provider value={{deleteTodo, addNewTodo}}>
                <AddTodo />
                <TodoList list={todos} /> 
            </TodoContext.Provider>
        </div>
    );
}

function reducer(state, action){
    const {type, payload} = action;
    switch(type){
        case 'add': {
            const newState = [...state, payload];
            return newState;
        }
        case 'delete': {
            return state.filter((todo)=>todo.id !== payload.id);
        }
        default: {
            break;
        }
    }

}