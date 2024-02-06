import { useReducer, createContext, useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";

export const TodoContext = createContext(null);

export default function Todo(){
    const [todos, dispatch] = useReducer(todoReducer,[{title:"Learn React", id:-1, isDone:false}]);
    const [filtered, setFiltered] = useState([]);
    const [filterType, setFilterType] = useState('')

    useEffect(()=>{
        switch(filterType){
            case 'pending':{
                setFiltered(
                    [...todos.filter((todo)=>todo.isDone===false)]
                )
                break;
            }
            case 'showAll':{
                setFiltered(todos);
            }
            default:{
                console.log(`${filterType} not valid`)
            }
        }
    },[todos, filterType])

    const showPending = () =>{
        setFilterType('pending')
    }

    const showAll = () =>{
        setFilterType('showAll')
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
