import React from 'react';
import './App.css';
import Players from './component/Players'
import Navigation from './component/navigation';

function App() {
    return (
      <div className="App">
        <Navigation />
        <Players />
      </div>
    );
}

export default App;