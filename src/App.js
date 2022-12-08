import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MoviesCounter></MoviesCounter>
      {users.map((usr) => (
        <Users name={usr.name} email={usr.email} id={usr.id}></Users>
      ))}
    </div>
  );
}

function Users(props) {
  const style = {
    border: "2px solid red",
    borderRadius: "5px",
  };
  return (
    <div style={style}>
      <h1>{props.name}</h1>
      <p>Email: {props.email}</p>
      <p>ID: {props.id}</p>
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
