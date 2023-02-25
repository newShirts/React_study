import React, {useState, useRef} from "react";

function UseRef01(){
    const [inputs, setInputs] = useState({  //useState(초기값을 객체형태로 넣음)
        name: '', 
        nickname: ''
    })

    const nameInput = useRef(); //어느 태그에 접근할 지 선택할 수 있도록 해줌.

    const {name, nickname} = inputs; //비구조화 할당 방식

    const onChange = (e)=>{
        const {value, name}= e.target;
        setInputs({
            ...inputs, //...:해당 객체를 복사하기
            [name]: value
        })
    }

    const onReset =()=>{
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus()    
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>

            <div>
                <b>값: {}</b>
            </div>
        </div>
    )

}

export default UseRef01;