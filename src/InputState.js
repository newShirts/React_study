import React, { useState } from "react";

function InputState(){

//[현재상태변수, setter함수(추후 값을 업데이트)] = useState(초기값)
    const[text, setText] = useState('');
    const onChange = (e)=>
    {console.log(e)
     //  console.log(e.target) //이벤트함수를 연결한 해당 태그 전체를 의미
     //  console.log(e.target.value) //이벤트함수가 걸린 해당태그(input태그)의 value=입력값
     setText(e.target.value)};
    
    const onReset = ()=>{setText('')};

    return(
        <div> 
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
       
            <div>
                <b>입력값: {text}</b>
            </div>
        </div>
    )
}

export default InputState;