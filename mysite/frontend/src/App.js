import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://127.0.0.1:8000/app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sumbit Movie Preference
        </a>
      </header>
    </div>
  );
}

export default App;
