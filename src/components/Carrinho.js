import React from 'react';
import '../App.css';
import Tabela from './Tabela';  
import Menus from '../components/Menus';

class Carrinho extends React.Component {
   
  render() {
    return (
      <div>
        <Menus store={this.props.store}/>
        <Tabela store={this.props.store}/>
      </div>
    );  
  }
}

export default Carrinho;
