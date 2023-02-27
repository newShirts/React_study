import React from "react";

function User({user, onRemove}){
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
            {/* 화살표함수의 오른쪽 실행구문{}이 짧을 때 중괄호 생략 가능 */}
        </div>
    );
}


function UserList({users,onRemove}){

    return(
        <div>
           {users.map(user=>(<User user={user} key={user.id} onRemove={onRemove}/>))
            }
        </div>
    )
}

export default UserList;