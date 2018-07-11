import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Livros from './Livros';
import Botao from './Botao';

class GuttersGrid extends React.Component {
    render() {
        return (
            <Grid container className="root" justify="center">
                <Grid item xs={9} >
                    <Grid container className="top">
                        {Livros.map(value => (  
                            <Grid key={value.codigo} item >
                                <Paper className="paper"> 
                                    <div className="imgT"> 
                                        <Botao livro={value} title={value.nome} width='50%' url={require('../img/' + value.img)}></Botao>                               
                                    </div>
                                </Paper>
                                <IconButton value="" color="primary" className="button" aria-label="Adicionar ao Carrinho de Compras">
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>            
            </Grid>
        );
    }
}

//<div className="nomeLivros">{value.nome}</div>
export default (GuttersGrid);