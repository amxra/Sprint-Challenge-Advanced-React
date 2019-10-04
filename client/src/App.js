import React from 'react';
import Players from './component/Players'
import './App.css';


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h2>Women's World Cup</h2>
        <Players />
      </div>
    );
  }
}
export default App;
