import React from 'react';
import './App.css';
import Grid from './components/Grid';
import Menu from './components/Menu';


class App extends React.Component {
   
  render() {
    return (
      <div>
        <Menu/>
        <Grid/>
      </div>
    );
  }
}

export default App;
