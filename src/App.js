import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "./Redux/2Action";


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch =useDispatch()
  
  console.log(counter,isLogged);

  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
      <h1>counter {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <br></br>


      {isLogged ? <h2>loged information data... {isLogged}</h2> : "your not logged"}
      </div>

      

    </div>
  );
}

export default App;
