import TodoItem from "./TodoItem";

export default function TodoList({list}){
    return(
        <div className="todolist-container">
            {list.map((todo) => <TodoItem key={todo.id} item={todo}/>)}
        </div>
    );
}