import React from 'react';
import './App.css';
import TestButton from './components/TestButton';
import AccountContainer from './components/AccountContainer';
import AddAccount from './components/AddAccount';




function App() {
  return (
    <div className="App">
        <AccountContainer />
        <TestButton />
        <AddAccount/>
    </div>
  );
}

export default App;
