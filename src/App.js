import logo from "./shock.jpg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent src={logo} alt="SHISH" classname="App-logo" />
        <p>FIRST REACTion, SHOCK!</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent text="SHOCK!" id="shock" />
      </header>
    </div>
  );
}

export default App;
