import React, { useState, useRef } from "react";

function MathQuiz(){

    const [first, setFirst] = useState(Math.ceil(Math.random()*9))
    const [second, setSecond] = useState(Math.ceil(Math.random()*9))

    const [third, setThird] = useState(Math.ceil(Math.random()*9))
    const [forth, setForth] = useState(Math.ceil(Math.random()*9))

    const [inputValue1, setValue1] = useState("")
    const [inputValue2, setValue2] = useState("")
    
    const [result1,setResult1] = useState("")
    const [result2,setResult2] = useState("")

    const input1 = useRef(null);
    const input2 = useRef(null);

    //곱셈 문제
    const multiplySubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(inputValue1) === first * second){
            setResult1('정답')
            setFirst(Math.ceil(Math.random()*9))
            setSecond(Math.ceil(Math.random()*9))
            setValue1("")
            input2.current.focus();
        } else {
            setResult1('오답')
            setValue1("")
            input1.current.focus();
        }
    }

    //덧셈 문제
    const plusSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(inputValue2) === third + forth) {
            setResult2('정답')
            setThird(Math.ceil(Math.random()*9))
            setForth(Math.ceil(Math.random()*9))
            setValue2("")
        } else {
            setResult2('오답')
            setValue2("")
        }
    }

 
    return(
        <div className="App-header">
            {/* 곱셈 문제 */}
            <h4 style={{color: "lightgreen"}}>Quiz 1</h4>
            <div> {first} x {second} = ? </div>
            <form onSubmit={multiplySubmitForm}>
                <input 
                       type="number" 
                       value={inputValue1}
                       onChange={(e)=>setValue1(e.target.value)}
                       /* (e.target.value)는 value={inputValue}를 의미함 */
                       ref={input1}/>
                       
                       
                <button>입력</button>
            </form>
            <h6 style={{color:"red"}}> {result1} </h6>
           
            {/* /덧셈 문제 */}
            <h4 style={{color: "lightgreen"}}>Quiz 2</h4>
            <div> {third} + {forth} = ? </div>
            <form onSubmit={plusSubmitForm}>
                <input 
                       type="number" 
                       value={inputValue2}
                       onChange={(e)=>setValue2(e.target.value)}
                       ref={input2}/>
                       
                       
                <button>입력</button>
            </form>
            <h6 style={{color:"red"}}> {result2} </h6>
           
        </div>
    )
}

export default MathQuiz;