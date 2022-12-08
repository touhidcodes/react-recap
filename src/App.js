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
      <MoviesCounter></MoviesCounter>
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

function MoviesCounter() {
  const [count, setCount] = useState(0);
  const eventClick = () => setCount(count + 1);
  console.log(count);
  return (
    <div>
      <button onClick={eventClick}>Increase Movie</button>
      <h3>Movie Number is: {count}</h3>
    </div>
  );
}
export default App;
