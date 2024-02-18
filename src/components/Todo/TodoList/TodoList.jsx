import { useReducer, useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import Button from "../../common/Button";
import "./TodoList.scss"

export default function TodoList({todos}){

    const [filtered, dispatchFilter] = useReducer(filterReducer,[])
    const [filterType, setFilterType] = useState('all')
  
    useEffect(()=>{
        dispatchFilter({type: filterType, payload:todos})
    },[todos, filterType])

    const showPending = () =>{
        setFilterType('pending')
    }

    const showAll = () =>{
        setFilterType('all')
    }

    const handleDropdownChange = (e)=>{
        setFilterType(e.target.value)
    }

    return(
        <>
            <div className="list-filters">
                {/* <Button onClickFunc={showAll}>
                    {`Show All (${todos.length})`}
                </Button>
                <Button onClickFunc={showPending} >
                    {`Pending (${todos.filter((todo)=>todo.isDone===false).length})`}
                </Button> */}
                <label for="status">Status</label>
                <select id="status" onChange={handleDropdownChange}>
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <ul className="todolist-container">
            {filtered.map((todo) => (
                <li 
                key={todo.id}>
                    <TodoItem 
                    id={todo.id}
                    title={todo.title} 
                    isDone={todo.isDone}/>
                </li>
                )
            )}
            </ul> 
        </>
        
    );
}

function filterReducer(state,action){
    const {type, payload} = action;
    switch(type){
        case 'pending':{
            return [...payload.filter((todo)=>todo.isDone===false)];
        }
        case 'done':{
            return [...payload.filter((todo)=>todo.isDone===true)];
        }
        case 'all':{
            return [...payload];
        }
        default:{
            break;
        }
    }
}
