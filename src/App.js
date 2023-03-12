//useReducer
import React from "react";
import ReducerCounter from "./ReducerCounter";

function App(){

  return(
    <div>
     <ReducerCounter step={1} min={-3} max={5}/>
     <ReducerCounter step={5} min={-10} max={10}/>
    </div>
  )
 
}

export default App;

// // MathQuiz - UserRef, UseEffect 연습
// import React from 'react';
// import MathQuiz from './MathQuiz';
// import './App.css';

// function App(){
 

//   return(
//     <MathQuiz/>
    
//   )
// }

// export default App;

// //useRef와 useEffect 활용 예제
// import React ,{useEffect, useRef} from 'react';
// import './App.css';

// function App(){
  
//   const inputRef = useRef(); //효과를 주고 싶은 태그를 지정
  
//   useEffect(()=>{
//       console.log(inputRef);
//       inputRef.current.focus();
//      },[] //웹사이트에 들어오자마자 첫 화면에서 렌더링 될 때 id 인풋창에 focus
//   )

//   const loginAlert= ()=>{
//     alert(inputRef.current.value + "님 환영합니다!")
//     inputRef.current.focus(); //loginAlert 함수 이후에 선택된 태그에 focus를 주기
//   }

//   return(
    
//    <div className="App">
//     <header className="App-header">
//       <input ref={inputRef} type="text" placeholder="id"/>
//       <input type="password" placeholder="password"/>
//       <button onClick={loginAlert}>Login</button>
//     </header>
//    </div>
    
//   )

// }


// export default App;

//UseEffect 예제2
// function App() {
//   return(
//     <Number/>
//   )
// }
// export default App;


//UseEffect 예제1
// function App(){
//   return (
//     <UseEffect/>
//   )
// }

// export default App;


//UseRef, UseMemo 예제
// import React , {useState, useRef, useMemo, useCallback} from 'react';
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';

// function App(){

//   function countActiveUsers(users){
//     console.log("빨간색의 활성상태 유저명수 계산중...")
//     return users.filter(user => user.active).length;
//   }

//   const [inputs,setIputs] = useState({username:"", email:""})
//   const{username,email} = inputs;
  
//   const handleInputChange = useCallback( evt=>{
//       //evt.target은 onChange 이벤트가 설정된 ArrayAdd.js의 input 태그를 가리킴  
//       const{name,value} = evt.target; 
//       setIputs({
//         ...inputs, //inputs 값 복사
//         [name]: value
//     })
//    },[inputs]
//   )

//   const [users,setUsers] = useState([
//     {
//         id: 1, 
//         username: 'user1',
//         email: 'user1@gmail.com',
//         active: true
//     },
//     {
//         id: 2, 
//         username: 'user2',
//         email: 'user2@gmail.com',
//         active: false
//     },
//     {
//         id: 3, 
//         username: 'user3',
//         email: 'user3@gmail.com',
//         active: false
//     }
//   ]
// )
//   const nextId = useRef(4)

//   const handleCreateClick = useCallback( ()=>{
//         const user = {
//         id: nextId.current,
//         username,
//         email
//         }
      
      
//       //setUsers([...users,user]) = setUsers(users.concat(user)) 작성방법은 다르지만 같은 기능을 함.
//       setUsers(users => users.concat(user))

//       setIputs({
//         username: "",
//         email: "",
//       })

//       nextId.current +=1
//     } ,[username, email]
//   )

//   //useCallBack을 사용하는 이유 (함수 재사용과 관련)
//   //: useCallBack을 사용하면 한 번 만들어놓은 함수를 필요할 때만 새로 만들고 재사용이 가능해진다. (최적화)
//   //그러나 useCallBack을 사용하지 않으면 컴포넌트가 리렌더링될 때마다 함수들이 새로 만들어진다. 
//   const handleDeleteClick = useCallback( id =>{
//       setUsers(users.filter(user => user.id !== id))
//       },[users]
//   )
    
//   const handleToggleClick = useCallback( id=>{
//       setUsers(users.map( user => user.id === id?{...user,active: !user.active}:user))
//       },[users]
//   )
//   const count = useMemo(()=>countActiveUsers(users),[users]);

//   return(
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onInputChange={handleInputChange}
//         onCreateClick={handleCreateClick}
//         />
      
//       <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>
      
//       <div>활성사용자 수: {count}</div>

//     </>
//   )
// }
// export default App;

//user배열을 props로 받아오게 변경하는 방법
//1.UserList1.js에서 users배열로 바로 선언해서 보여주는 방식
// import React from "react";
// import UserList1-1 from "./UserList1-1"
// function App() {
//    return(
//     <UserList1/>
//    )
// }
//export default App;


//2.App.js에서 user배열을 선언하고 props로 UserList1.js에 users배열 전송하는 방법
// import React from "react";
// import UserList1-2 from "./UserList1-2"
// function App(){
//   const users = [
//     {
//         id: 1, 
//         username: 'user1',
//         email: 'user1@gmail.com'
//     },
//     {
//         id: 2, 
//         username: 'user2',
//         email: 'user2@gmail.com'
//     },
//     {
//         id: 3, 
//         username: 'user3',
//         email: 'user3@gmail.com'
//     }
// ]

//   return( //users배열을 UserList1-2의 props로 전달
//     <UserList1 users={users}/>
//   );
// }

// export default App;


//07 UseRef
// import React from "react";
// import UseRef01 from "./UseRef01"
// function App(){
//   return(
//     <UseRef01/>
//   );
// }
// export default App;


//06 ArrayRender
// import React from "react";
// import ArrayRender1 from "./ArrayRender1"
// function App(){
//   return(
//     <ArrayRender1/>
//   );
// }
// export default App;

//05 UseState 예시2 . Input값 동적 상태변화 반영하기
// import React from "react";
// import InputState from "./InputState"
// function App(){
//   return(
//     <InputState/>
//   );
// }

// export default App;

//04 useState 예시 1.버튼 동적 구현하기
// import React from "react";
// import Counter from "./Counter"
// function App(){
//   return (<Counter/>)
// }

// export default App;

//03 props : 두 컴포넌트 사이의 데이터 전송
// import React from "react";
// import Hello from "./Hello"
// import Wrapper from "./Wrapper"
// function App(){
//   return (<Hello name='react' color='red'/>)
// }

// export default App;

// 02 컴포넌트 export, import 연습
// import React from "react";
// import MyComponent from "./MyComponent"
// function App() {
//   return <MyComponent/>;
// }

// export default App;



// 01 - JSX 테스트 
// function App() { /*함수형 컴포넌트*/

//   const text = 'JSX & React project!'

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {text}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


