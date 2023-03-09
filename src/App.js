import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "./Redux/2Action/counter";
import { login } from "./Redux/2Action/Login";


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  console.log("isLogged and counter:", isLogged,counter);


  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <br></br>


      {isLogged ? <h2>logged information data... {isLogged}</h2> : "your not logged"}
      <button onClick={()=>dispatch(login())}>LoginIn</button>
      </div>

      

    </div>
  );
}

export default App;
