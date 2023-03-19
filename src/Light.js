import React from "react";

function Light({room, on, toggle}){
    console.log({room, on})
    return(
        <div>
            <button onClick={toggle}>
            {room}
            {on? "💡" : "⬛"} {/* 삼항연산자 */}
            </button>
           
        </div>
    )
   
}

export default React.memo(Light);

