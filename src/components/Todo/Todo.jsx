import { useReducer, createContext, useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "./todo.reducer";

export const TodoContext = createContext(null);

export default function Todo(){
    const [todos, dispatch] = useReducer(todoReducer,[{title:"Learn React", id:-1, isDone:false}]);
    // const [filtered, setFiltered] = useState([]);
    const [filtered,dispatchFilter] = useReducer(filterReducer,[])
    const [filterType, setFilterType] = useState('all')

    
    useEffect(()=>{
        // switch(filterType){
        //     case 'pending':{
        //         setFiltered(
        //             [...todos.filter((todo)=>todo.isDone===false)]
        //         )
        //         break;
        //     }
        //     case 'all':{
        //         setFiltered(todos);
        //         break;
        //     }
        //     default:{
        //         console.log(`${filterType} not valid`)
        //     }
        // }

        dispatchFilter({type: filterType, payload:todos})
    },[todos, filterType])

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
