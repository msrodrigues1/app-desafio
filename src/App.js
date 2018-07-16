import React from 'react';
import './App.css';
import Menus from './components/Menus';
import { myContext } from './Context/myContext';
import Pedido from './model/Pedido';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pedidos: [],
      contador: 1,
    };

    this.click          = this.click.bind(this);
    this.decrementar    = this.decrementar.bind(this);
    this.incrementar    = this.incrementar.bind(this);
    this.delete         = this.delete.bind(this);
    this.subTotal       = this.subTotal.bind(this);
    this.desconto       = this.desconto.bind(this);
    this.pDesconto      = this.pDesconto.bind(this);
    this.qtdPedidos     = this.qtdPedidos.bind(this);
    this.calcularTotal  = this.calcularTotal.bind(this);
  }

  decrementar(pedido) {
    pedido.decrementar();
    this.setState({ pedidos: this.state.pedidos });
  }

  incrementar(pedido) {
    pedido.incrementar();
    this.setState({ pedidos: this.state.pedidos });
  }

  click(livro) {
    let novoPedido = new Pedido(livro, 1);
    let existeLivro = false;

    this.state.pedidos.forEach(pedido => {
      if (pedido.livro.codigo === novoPedido.livro.codigo) {
        pedido.incrementar();
        existeLivro = true;
      }
    });

    if (!existeLivro) {
      this.state.pedidos.push(novoPedido);
      this.setState({ pedidos: this.state.pedidos });
    }
  }

  delete(livro){
    this.setState ({pedidos: this.state.pedidos.filter(pedido => livro.codigo !== pedido.livro.codigo)});
  }

  subTotal(){
   return this.state.pedidos.reduce((total,pedido) => total + pedido.getTotalPedido(),0.00);
  }
  
  qtdPedidos(){
    return this.state.pedidos.length;
  }

  pDesconto(){
    switch(this.qtdPedidos()){
        case 1: 
            return 0;
        case 2:
            return 5;
        case 3:
            return 10;
        case 4:
            return 20;
        default:
            return 25;
    }
  }

  desconto(){
    return this.subTotal() * (this.pDesconto() / 100);
  }

  calcularTotal(){
    return this.subTotal() - this.desconto();
  }


  render() {
    return (
      <myContext.Provider value={{
        pedidos:this.state.pedidos,
        click:this.click,
        incrementar:this.incrementar,
        decrementar:this.decrementar,
        delete:this.delete,
        subTotal:this.subTotal,
        desconto:this.desconto,
        pDesconto:this.pDesconto,
        qtdPedidos:this.qtdPedidos,
        calcularTotal:this.calcularTotal,
      }}>
        <div>
          <Menus qtdPedidos={this.qtdPedidos()} />
          {this.props.children}
        </div>
      </myContext.Provider>
    );
  }
}

export default App;
