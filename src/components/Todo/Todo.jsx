import { useReducer, createContext, useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";

export const TodoContext = createContext(null);

export default function Todo(){
    const [todos, dispatch] = useReducer(todoReducer,[{title:"Learn React", id:-1, isDone:false}]);
    const [filtered, setFiltered] = useState(todos);
    const [filterType, setFilterType] = useState('')

    useEffect(()=>{
        switch(filterType){
            case 'pending':{
                setFiltered(
                    [...todos.filter((todo)=>todo.isDone===false)]
                )
                break;
            }
            default:{
                setFiltered(todos);
            }
        }
    },[todos, filterType])

    const showPending = () =>{
        setFilterType('pending')
    }

    const showAll = () =>{
        setFilterType('')
    }

    return(
        <div id="todo">
            <TodoContext.Provider value={dispatch}>
                <AddTodo />
            </TodoContext.Provider>
            <button onClick={showAll}>Show All</button>
            <button onClick={showPending}>Show Pending Only</button>
            <TodoContext.Provider value={dispatch}>
                <TodoList list={filtered} /> 
            </TodoContext.Provider> 
        </div>
    );
}
