import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss"

export default function TodoList({list}){
    return(
        <ul className="todolist-container">
            {list.map((todo) => (
                <li 
                key={todo.id} 
                className="todo-item-container">
                    <TodoItem 
                    id={todo.id}
                    title={todo.title} 
                    isDone={todo.isDone}/>
                </li>
                )
            )}
        </ul> 
    );
}