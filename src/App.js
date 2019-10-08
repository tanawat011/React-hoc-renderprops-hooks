import React from 'react';
import Counter from './features/CounterHooks'

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </>
  );
};

export default App;
