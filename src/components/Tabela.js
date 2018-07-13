import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Livros from './Livros';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import '../App.css';
import Contador from './Contador';
import Formatador from '../utilitarios/Formatador';
import { myContext } from '../Context/myContext';
import { Typography } from '../../node_modules/@material-ui/core';

class TabelaSimples extends React.Component {

    render() {
        return (
            <myContext.Consumer>
                {lista => (
                    <div className="cPaper">
                    <Paper className="paper1">
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
                                    {lista.pedidos.map(value => {
                                        return (
                                            <TableRow className="tabelaLinha" key={value.livro.codigo}>
                                                <TableCell>
                                                    <Contador onClickDecremento={() => lista.decrementar(value)} onClickIncremento={() => lista.incrementar(value)} qtd={value.qtd} />
                                                </TableCell>
                                                <TableCell >{value.livro.nome}</TableCell>
                                                <TableCell numeric>{Formatador.formataPreco(value.livro.preco)}</TableCell>
                                                <TableCell className="colunaPrecoTotal" numeric>{Formatador.formataPreco(value.getTotalPedido())}</TableCell>
                                                <TableCell>
                                                    <IconButton aria-label="Delete" onClick={() => lista.delete(value.livro)}>
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
                    <Paper className="paper2">
                        <Typography>SubTotal</Typography>
                        <Typography className="typoTeste">{Formatador.formataPreco(lista.subTotal())}</Typography>
                        
                        <Typography>Desconto</Typography>
                        <Typography className="typoTeste">{Formatador.formataPreco(lista.desconto())}</Typography>

                        <Typography>Total</Typography>
                        <Typography className="typoTeste">{Formatador.formataPreco(lista.calcularTotal())}</Typography>
                        
                        <Button className="btnFinalizar" variant="contained" color="primary" >Finalizar Compra</Button>
                    </Paper>
                    </div>
                )}
            </myContext.Consumer>
        );
    }
}


export default (TabelaSimples);


/*  <Loading className="finalizarCompra"/>  */