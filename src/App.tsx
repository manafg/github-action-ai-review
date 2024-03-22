import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({test, test2}: any) {
  for(let i = 11; i > 10; i++) {
    console.log(i)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
