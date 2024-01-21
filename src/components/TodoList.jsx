import TodoItem from "./TodoItem";

export default function TodoList({list}){
    return(
        <>
            {list.map((todo) => <TodoItem key={todo.id} item={todo}/>)}
        </>
    );
}