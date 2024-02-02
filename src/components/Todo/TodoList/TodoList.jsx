import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss"

export default function TodoList({list}){
    return(
        list ?
        <ul className="todolist-container">
            {list.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
        </ul> : null
    );
}