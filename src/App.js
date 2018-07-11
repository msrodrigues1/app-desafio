import React from 'react';
import './App.css';
import Grid from './components/Grid';
import Menus from './components/Menus';

class App extends React.Component {
   
  render() {
    return (
      <div>
        <Menus/>
        <Grid/>
      </div>
    );  
  }
}

export default App;
