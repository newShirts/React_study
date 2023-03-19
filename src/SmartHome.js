import React, { useCallback, useState } from "react";
import Light from "./Light";

function SmartHome(){

    const [masterOn,setMasterOn] = useState(false)
    const [kitchenOn,setKitchenOn] = useState(false)
    const [bathOn,setBathOn] = useState(false)

    //useCallback과 React.memo를 사용
    //침실 버튼 클릭 시 해당 함수만 렌더링 되도록 최적화한다.
    const toggleMaster = useCallback(() => {setMasterOn(!masterOn)}, [masterOn])
    const toggleKitchen = useCallback(()=> {setKitchenOn(!kitchenOn)}, [kitchenOn])
    const toggleBath = useCallback(()=> {setBathOn(!bathOn)}, [bathOn])

    //useCallback과 React.memo를 사용하지 않을 경우의 코드
    //브라우저 콘솔 창에서 침실 버튼만 클릭했을 때에 주방, 욕실 버튼의 코드까지 동작한다.
    // const toggleMaster = () => {setMasterOn(!masterOn)}
    // const toggleKitchen =()=> {setKitchenOn(!kitchenOn)}
    // const toggleBath = ()=> {setBathOn(!bathOn)}

    return(
        <div>
            <Light room="침실" on={masterOn} toggle={toggleMaster}></Light>
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen}></Light>
            <Light room="욕실" on={bathOn} toggle={toggleBath}></Light>
        </div>
    )
}

export default SmartHome;