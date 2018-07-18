import {observable} from 'mobx';

class Pedido{
    @observable qtd;

     constructor(livro, qtd){
         this.livro = livro;
         this.qtd   = qtd;
     }

     decrementar(){
        if(this.qtd > 1) 
            this.qtd--;
     }

     incrementar(){
         console.log('entrou no pedido')
         if(this.qtd < 10)
            this.qtd++;
     }

     getTotalPedido(){
         return this.livro.preco * this.qtd;
     }
}

export default (Pedido);