import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';
import Livros from './Livros';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import '../App.css';
import Contador, { qtd } from './Contador';
import Pedido from '../model/Pedido';
import Formatador from '../utilitarios/Formatador';

class TabelaSimples extends React.Component {

    constructor() {
        super();
        this.state = {
            pedidos: [],
            contador: 1,
        };
    }

    componentDidMount() {
        let pedidos1 = [
            new Pedido(Livros[0], 1),
            new Pedido(Livros[1], 1),
            new Pedido(Livros[2], 1),
            new Pedido(Livros[3], 1)
        ];

        this.setState({ pedidos: pedidos1 });
    }

    decrementar(pedido) {
        pedido.decrementar();
        this.setState({ pedidos: this.state.pedidos });
    }

    incrementar(pedido) {
        pedido.incrementar();
        this.setState({ pedidos: this.state.pedidos });
    }

    excluirPedido(pedido) {
        pedido.excluirPedido();
        this.setState({ pedidos: this.state.pedidos });
    }

    render() {

        const getContador = this.state.contador;
        let btn1;
        let btn2;

        if (getContador > 1) {
            btn1 = <Button onClick={this.decrementar.bind(this)}>-</Button>
        } else {
            btn1 = <Button disabled onClick={this.decrementar.bind(this)}>-</Button>
        }

        if (getContador < 10) {
            btn2 = <Button onClick={this.incrementar.bind(this)}>+</Button>
        } else {
            btn2 = <Button disabled onClick={this.incrementar.bind(this)}>+</Button>
        }

        return (
            <Paper>
                <div className="divTabela">
                    <Table className="tabela">
                        <TableHead>
                            <TableRow>
                                <TableCell>Quantidade</TableCell>
                                <TableCell >Nome</TableCell>
                                <TableCell numeric>Valor Unitário</TableCell>
                                <TableCell numeric>Valor Total</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.pedidos.map(value => {
                                return (
                                    <TableRow className="tabelaLinha" key={value.livro.codigo}>
                                        <TableCell>
                                            <Contador onClickDecremento={() => this.decrementar(value)} onClickIncremento={() => this.incrementar(value)} qtd={value.qtd} />
                                        </TableCell>
                                        <TableCell >{value.livro.nome}</TableCell>
                                        <TableCell numeric>{Formatador.formataPreco(value.livro.preco)}</TableCell>
                                        <TableCell className="colunaPrecoTotal" numeric>{Formatador.formataPreco(value.getTotalPedido())}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="Delete" onClick={(value) => console.log(value)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}


export default (TabelaSimples);

/*

<TableFooter>

                        {this.state.pedidos.map(value => {
                                return (
                            <TableRow>
                            <TableCell></TableCell>
                            <TableCell className="colunaPrecoTotal" numeric>{Formatador.formataPreco(value.getTotalPedido())}</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" >Finalizar Compra</Button>
                                </TableCell>
                            </TableRow>
                             );
                            })}
                        </TableFooter>

*/