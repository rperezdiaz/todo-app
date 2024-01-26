import TodoItem from "./TodoItem";

export default function TodoList({list}){
    return(
        <ul className="todolist-container">
            {list.map((todo) => <TodoItem key={todo.id} item={todo}/>)}
        </ul>
    );
}