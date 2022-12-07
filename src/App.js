import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = ["Jasim", "Kabir", "Faltu", "Maltu"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
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
export default App;
