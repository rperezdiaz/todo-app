import { useState } from "react";
export default function TodoItem({item}){
    
    const[completed, setCompleted] = useState(false);

    return(
        
        <li>{!completed? item.title : <s>{item.title}</s>}</li>
        
    );
}