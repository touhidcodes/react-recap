import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const nayok = [
    { name: "Jasim", age: "34" },
    { name: "Kabir", age: "44" },
    { name: "Faltu", age: "46" },
    { name: "Maltu", age: "54" },
    { name: "Baltu", age: "74" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MoviesCounter></MoviesCounter>
      {nayok.map((nk) => (
        <Nayok name={nk.name} age={nk.age}></Nayok>
      ))}
    </div>
  );
}

function Nayok(props) {
  const style = {
    border: "2px solid red",
    borderRadius: "5px",
  };
  return (
    <div style={style}>
      <h1>My name is: {props.name}</h1>
      <p>My Age is: {props.age}</p>
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
      <MovieDone movies={count + 2}></MovieDone>
    </div>
  );
}

function MovieDone(props) {
  return (
    <div>
      <h2>Movie Done: {props.movies}</h2>
    </div>
  );
}
export default App;
