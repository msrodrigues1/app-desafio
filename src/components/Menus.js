import Button from '@material-ui/core/Button';
import React from 'react';
import '../App.css';
import { Link } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { myContext } from '../Context/myContext';
import Grid from '@material-ui/core/Grid';

function ButtonBases(props) {
    return (
        <Grid container className="barraMenu">
            <Grid item xs className="botaoHome">
                <img src={require('../logo.svg')} className="imagemMenu" alt="" />
                <Typography variant="title" className="logo">Livraria Autbank</Typography>
                <myContext.Consumer>
                    {testeBadge => (
                        <Button className="botaoCarrinho" size="large" >
                            <Link className="botaoLink2" to="/Carrinho">
                                Carrinho
                                </Link>
                            <div className="badgeT"> {props.qtdPedidos} </div>
                        </Button >
                    )}
                </myContext.Consumer>
                <Button className="btnH" size="large">
                    <Link className="botaoLink1" to="/">Home</Link>
                </Button>
            </Grid>
        </Grid>
    );
}


export default ButtonBases;