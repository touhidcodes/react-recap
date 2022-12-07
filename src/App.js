import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </div>
  );
}

function User() {
  const style = {
    border: "2px solid red",
    borderRadius: "5px",
  };
  return (
    <div style={style}>
      <h1>My name is:</h1>
      <p>My Occupation is"</p>
    </div>
  );
}
export default App;
