import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [name, setName] = useState(''); //usestate for storing values from input
// variable, function name to update the value when changes
  const [Ename, setNamee] = useState('');
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="my-name">Shyam</h1>
        <span id="a">shyamng48@gmail.com</span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <form>
      <h1>{name}</h1>
      <input id ="text1" type="text" placeholder="Enter your name" 
      value={name}
      onChange = {(e) => setName(e.target.value)}></input>
      <button>Submit</button>

      <h1>{Ename}</h1>
      <input id = "text2" type="text" placeholder="Enter your Email" 
      value={Ename}
      onChange = {(e) => setNamee(e.target.value)}></input>
      <button className='but'>Submit</button>

      </form>
    </div>
  );
}

export default App;

// render: showcasing the output

