import { computed, observable } from "mobx";
import Pedido from './Pedido';

export default class CarrinhoStore {

    @observable pedidos;

    constructor() {
        this.pedidos = []
    }

    decrementar(pedido) {
        pedido.decrementar();
    }

    @computed get carrinho() {
        return this.pedidos.map(
            pedido => pedido
        );
    }

    incrementar(pedido) {
        pedido.incrementar();
    }

    click(livro) {
        let novoPedido = new Pedido(livro, 1);
        let existeLivro = false;

        this.pedidos.forEach(pedido => {
            if (pedido.livro.codigo === novoPedido.livro.codigo) {
                pedido.incrementar();
                existeLivro = true;
            }
        });

        if (!existeLivro) {
            this.pedidos.push(novoPedido);
        }
    }

    delete(livro) {
        this.pedidos = this.pedidos.filter(pedido => livro.codigo !== pedido.livro.codigo);
    }

    subTotal() {
        return this.pedidos.reduce((total, pedido) => total + pedido.getTotalPedido(), 0.00);
    }

    qtdPedidos() {
        return this.pedidos.length;
    }

    pDesconto() {
        switch (this.qtdPedidos()) {
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

    desconto() {
        return this.subTotal() * (this.pDesconto() / 100);
    }

    calcularTotal() {
        return this.subTotal() - this.desconto();
    }
}