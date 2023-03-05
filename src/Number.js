import React, { useEffect, useState } from "react";

const Number =()=>{

    const [number,setNumber] = useState(0)
    const [name,setName] = useState("변경 전 이름")
    // useEffect(()=>{console.log('hello')})  클릭 버튼 누를 때마다 콘솔창에 hello 출력, 변경 버튼 첫 회 누를 때에만 hello 출력
    // useEffect(()=>{console.log('hello')},[]) 콘솔창에 hello 1회 출력 된 이후 두 버튼 클릭 시 모두 출력되지 않음.
    // useEffect(()=>{console.log('hello')},[name]) 클릭 버튼 눌러도 hello 출력되지 않고, 변경 버튼 클릭 시 첫 회만 출력됨.

    const counter = ()=> setNumber(number +1);
    const nameChanger = ()=> setName("변경 후 이름");

    return(
        <div>
            <button onClick={counter}>클릭</button>
            <button onClick={nameChanger}>변경</button>
            <div>{number}</div>
            <div>{name}</div>
        </div>
    )
}

export default Number;