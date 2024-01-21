import { useReducer, useRef } from "react";

 let id = 0;

export default function Todo(){
    const [todos, dispatch] = useReducer(reducer,[])
    const todoTitle = useRef()
   
    const addNewTodo = () => {
        const title = todoTitle.current.value;
        if (title) {
            dispatch({
                type: 'add',
                payload: {title: title, id: id++}
            });
        } 
        todoTitle.current.value = '';
    }
    
    return(
        <>
            <input ref={todoTitle} id='input' type="text" />
            <button onClick={addNewTodo}>ADD</button>
            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
            </ul>            
            
        </>
    );
}

function reducer(state, action){
    const {type, payload} = action;
    switch(type){
        case 'add': {
            const newState = [...state];
            console.log(payload);
            newState.push(payload);
            return newState;
        }
        case 'delete': {
            break;
        }
        default: {
            break
        }
    }

}