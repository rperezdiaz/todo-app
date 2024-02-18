
import { memo } from "react";
function Button({onClickFunc, children, className}){
    return(
        <button className={className} onClick={onClickFunc}>{children}</button>
    );
}

export default memo(Button);