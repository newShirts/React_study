import React from "react";

function User({propUser, onDeleteClick, onToggleClick}){
    //console.log(propUser)

    // 2. propUser 작성 반복을 피하여 비구조화 할당 방식으로 작성
    const{username, email, id, active} = propUser
    return(
        <div>
            <b style={{cursor:'pointer', color: active? 'red':'black'}} 
            onClick={()=>{onToggleClick(id)}}>{username}</b>
            <span>({email})</span>
            <button onClick={()=>onDeleteClick(id)}>삭제</button>
            {/* 화살표함수의 오른쪽 실행구문{}이 짧을 때 중괄호 생략 가능 */}
        </div>
    );

    //1. propUser 반복하여 작성하는 방법
    // return(
    //     <div>
    //         <b>{propUser.username}</b><span>({propUser.email})</span>
    //         <button onClick={()=>onDeleteClick(propUser.id)}>삭제</button>
    //         {/* 화살표함수의 오른쪽 실행구문{}이 짧을 때 중괄호 생략 가능 */}
    //     </div>
    // );
}


function UserList({propUsers,onDelete, toggleClick}){
//console.log(propUsers)
//두 번씩 출력되는 이유는 index.js의 <React.StrictMode> 때문이다.

    return(
        <div>
            {/* User라는 하위 컴포넌트(파라미터)에 propUser, key, onDeletClick라는 props 이름으로 전송 */}
           {propUsers.map( u => 
           (<User propUser={u} key={u.id} onDeleteClick={onDelete} onToggleClick={toggleClick}/>))

            }
        </div>
    )
}

export default UserList;