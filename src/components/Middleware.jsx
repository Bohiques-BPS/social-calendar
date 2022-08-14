import React from "react"

export default function Middleware({children, condition}) {
    
    const result = condition?condition():null;
    
    if(( result === null ) || ( result === true )) {
        return children;
    }else{
        return result
    }
} 