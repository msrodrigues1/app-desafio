import React from 'react';
import '../App.css';
import Menus from './Menus'; 
import Tabela from './Tabela';

class Carrinho extends React.Component {
   
  render() {
    return (
      <div>
        <Menus/>
        <Tabela/>
      </div>
    );  
  }
}

export default Carrinho;
