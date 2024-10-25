import React from 'react';
import './App.css';
import helloImage from './pexels-athena-2582937.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <img src={helloImage} alt="Hello World" className="hello-image" />
      </header>
    </div>
  );
}

export default App;
