import React from 'react';
import Players from './component/Players'
import './App.css';
import Navigation from "./component/navigation";


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Navigation/>
        <Players />
      </div>
    );
  }
}
export default App;
