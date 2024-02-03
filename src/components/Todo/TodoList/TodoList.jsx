import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss"

export default function TodoList({list}){
    return(
        <ul className="todolist-container">
            {list.map((todo) => (
                <TodoItem 
                key={todo.id} 
                id={todo.id}
                title={todo.title} 
                isDone={todo.isDone}/>)
            )}
        </ul> 
    );
}