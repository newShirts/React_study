//Custom Hooks: 필요한 함수를 직접 만들어서 구현
//input창 관련 코드들을 custom hooks인 useInputs를 만들어서 대체해보자.
//useState와 useReducer 2가지 방식으로 가능함.

import React, { useCallback, useState } from "react";

function useInputs(initialForm){

    const [form, setForm] = useState(initialForm)

    const handleInputChange = useCallback( e => {
        const {name, value} = e.target; //비구조화 할당. ArrayAdd.js의 input태그의 name과 value
        setForm(form => ({...form, [name]: value}))
    }, [])

    const reset = useCallback(() => setForm(initialForm), [initialForm])

    return [form, handleInputChange, reset];
}

export default useInputs;