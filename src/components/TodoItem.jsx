import { useState } from "react";
export default function TodoItem({item}){
    
    const[comleted, setCompleted] = useState(false);

    return(
        <li>{item.title}</li>
    );
}