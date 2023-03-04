import './App.css';
import React from 'react';
import UseEffect from './UseEffect';


//UseEffect예제1
function App(){
  return (
    <UseEffect/>
  )
}

export default App;

//UseRef
// function App(){

//   const [inputs,setIputs] = useState({username:"", email:""})
//   const{username,email} = inputs;
  
//   const handleInputChange = evt=>{
//     //evt.target은 onChange 이벤트가 설정된 ArrayAdd.js의 input 태그를 가리킴  
//     const{name,value} = evt.target; 
//     setIputs({
//       ...inputs, //9번째 줄의 inputs 값 복사
//       [name]: value
//     })
    
//   }

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
//   const handleCreateClick = ()=>{
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     }

//     setUsers(users.concat(user))
//     setIputs({
//       username: "",
//       email: "",
//     })

//     nextId.current +=1
//   }

// const handleDeleteClick = id =>{
//   setUsers(users.filter(user => user.id!==id))
// }
  

// const handleToggleClick = (id)=>{
//       setUsers(users.map( user => user.id === id?{...user,active: !user.active}:user))
// }


//   return(
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onInputChange={handleInputChange}
//         onCreateClick={handleCreateClick}
//         />
      
//       <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>
//     </>
//   )
// }
// export default App;


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

//   return(
//     <UserList1 users={users}/>
//   );
// }

// export default App;


//07 UseRef
// function App(){
//   return(
//     <UseRef01/>
//   );
// }
// export default App;


//06 ArrayRender
// function App(){
//   return(
//     <ArrayRender1/>
//   );
// }
// export default App;

//05 InputState
// function App(){
//   return(
//     <InputState/>
//   );
// }

// export default App;

//04 useState - 버튼 동적 구현하기
// function App(){
//   return (<Counter/>)
// }

// export default App;

//03 props : 두 컴포넌트 사이의 데이터 전송
// function App(){
//   return (<Hello name='react' color='red'/>)
// }

// export default App;

// 02 컴포넌트 export, import 연습
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


