import React, { useState } from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App;


// // hooks 
// function App() {
//   const [date, setDate] = useState(new Date());

//   function tick(){
//     setDate(
//       new Date()
//     )
//   }

//   useEffect(()=>{
//     let Timeid=setInterval(
//       ()=>tick()
//       ,1000)
//       return(
//         ()=>clearInterval(Timeid)
//       )
//   });

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2> It is {date.toLocaleTimeString()}</h2>
//     </div>
//   )

// }



//  Handle Event
// function App(props) {

//   const [isToggeOn, setToggeOn] = useState(props.isToggeOn);


//   function handleClick() {
//     setToggeOn(!isToggeOn);
//   }
//   function handleLogin() {
//     setToggeOn(false);
//   }
//   function handleLogout() {
//     setToggeOn(true);
//   }
//   let button = isToggeOn ? <LoginButton Onclick={handleLogin} /> : <LogoutButton Onclick={handleLogout} />
//   return (
//     <div>
//       <button onClick={handleClick}>{isToggeOn ? "ON" : "OFF"}</button>
//       <div>
//         {button}
//       </div>
//       <div>
//         <h1>{isToggeOn ? <UserGreeting /> : <GuestGreeting />}</h1>
//       </div>
//     </div>
//   )
// }


// function UserGreeting() {
//   return (
//     <h1>Welcome back master !</h1>
//   )
// }

// function GuestGreeting() {
//   return (
//     <h1>Please sign In!</h1>
//   )
// }

// function LoginButton(props) {
//   return <button onClick={props.Onclick}>Login</button>
// }

// function LogoutButton(props) {
//   return <button onClick={props.Onclick}>Logout</button>

// }


