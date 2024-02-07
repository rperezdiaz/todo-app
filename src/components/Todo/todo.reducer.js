export default function todoReducer(state, action){
    const {type, payload} = action;
    switch(type){
        case 'add': {
            return [...state, payload];
        }
        case 'delete': {
            return state.filter((todo)=>todo.id !== payload);
        }
        case 'edit':{
            return state.map(
                (todo)=>(todo.id === payload.id ? {...todo, title:payload.title} :todo)
            )
        }
        case 'toggleDone':{
            return state.map((todo) =>(
                todo.id === payload.id ? {...todo, isDone:payload.isDone} : todo
            ))
        }
        default: {
            break;
        }
    }

}