import { useReducer, createContext, useState, useEffect } from "react";
import useLocalStorageReducer from "../../hooks/useLocalStorage";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";
import Button from "../common/Button";

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
                <div>
                    <Button 
                    onClickFunc={showAll} 
                    children={`Show All (${todos.length})`}
                    />
                    <Button 
                    onClickFunc={showPending} 
                    children={`Pending (${todos.filter((todo)=>todo.isDone===false).length})`}
                    />

                    {/* <button onClick={showAll}>Show All ({todos.length})</button>
                    <button onClick={showPending}>Pending ({todos.filter((todo)=>todo.isDone===false).length})</button> */}
                </div>
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
