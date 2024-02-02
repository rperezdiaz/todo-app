export default function todoReducer(state, action){
    const {type, payload} = action;
    switch(type){
        case 'add': {
            const newState = [...state, payload];
            return newState;
        }
        case 'delete': {
            return state.filter((todo)=>todo.id !== payload.id);
        }
        case 'editTitle':{
            return state.map((todo)=>{
                if(todo.id === payload.id){
                    return {...todo, title:payload.title};
                }else{
                    return todo;
                }
            })
        }
        case 'toggleDone':{
            return state.map((todo)=>{
                if(todo.id === payload.id){
                    return {...todo, isDone:payload.isDone};
                }else{
                    return todo;
                }
            })
        }
        default: {
            break;
        }
    }

}