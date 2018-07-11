class Pedido{
     constructor(livro, qtd){
         this.livro = livro;
         this.qtd   = qtd;
     }

     decrementar(){
        if(this.qtd > 1) 
            this.qtd--;
     }

     incrementar(){
         if(this.qtd < 10)
            this.qtd++;
     }

     getTotalPedido(){
         return this.livro.preco * this.qtd;
     }
}

export default (Pedido);