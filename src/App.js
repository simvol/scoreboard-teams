import React from 'react';
import './App.css';

import { usersRef, firestore } from './config/firebase';


function App() {

  usersRef.onSnapshot(next => next.forEach(item => console.log(item.data())));

  return (
    <div className="App">
      <header className="App-header">
        Hello world
      </header>
    </div>
  );
}

export default App;
