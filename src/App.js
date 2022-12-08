import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const name = ["Jasim", "Kabir", "Faltu", "Maltu"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Moviescounter></Moviescounter>
      <User name={name[0]}></User>
      <User name={name[1]}></User>
      <User name={name[2]}></User>
      <User name={name[3]}></User>
    </div>
  );
}

function User(props) {
  const style = {
    border: "2px solid red",
    borderRadius: "5px",
  };
  return (
    <div style={style}>
      <h1>My name is: {props.name}</h1>
      <p>My Occupation is"</p>
    </div>
  );
}

function Moviescounter() {
  const [count, setCount] = useState(0);
  const eventHandle = () => setCount(count + 1);
  return (
    <div>
      <button onclick={eventHandle}>Increase Movie</button>
      <h3>Movie Number is:{setCount}</h3>
    </div>
  );
}
export default App;
