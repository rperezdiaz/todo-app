import { useReducer, createContext, useState, useEffect } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorage";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";

export const TodoContext = createContext(null);

export default function Todo(){

    console.log('Todo.jsx rendered')

    const [todos, dispatch] = useLocalStorageReducer('todos',todoReducer,[{title:"My First Task!", id:-1, isDone:false}]);
    const [filtered, dispatchFilter] = useReducer(filterReducer,[])
    const [filterType, setFilterType] = useState('all')

    
    useEffect(()=>{
        dispatchFilter({type: filterType, payload:todos})
    },[todos, filterType])

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const showPending = () =>{
        setFilterType('pending')
    }

    const showAll = () =>{
        setFilterType('all')
    }

    return(
        <div id="todo">
            <TodoContext.Provider value={dispatch}>
                <AddTodo />
            </TodoContext.Provider>
            <div>
                <button onClick={showAll}>Show All ({todos.length})</button>
                <button onClick={showPending}>Pending ({todos.filter((todo)=>todo.isDone===false).length})</button>
            </div>
            <TodoContext.Provider value={dispatch}>
                <TodoList list={filtered} /> 
            </TodoContext.Provider> 
        </div>
    );
}

function filterReducer(state,action){
    const {type, payload} = action;
    switch(type){
        case 'pending':{
            return [...payload.filter((todo)=>todo.isDone===false)];
        }
        case 'all':{
            return [...payload];
        }
        default:{
            break;
        }
    }
}
