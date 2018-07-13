import Button from '@material-ui/core/Button';
import React from 'react';
import '../App.css';
import { Link } from 'react-router';
import Typography from '@material-ui/core/Typography';

function ButtonBases() {
    return (
        <div className="barraMenu">
            <img src={require('../logo.svg')} className="imagemMenu" alt="" />
            <div className="botaoHome">
                <Typography variant="title" className="logo">Livraria Autbank</Typography>
                <Button size="large">
                    <Link className="botaoLink1" to="/">Home</Link>
                </Button>
            </div>
            <div>
                <Button className="botaoCarrinho" size="large" >
                    <Link className="botaoLink2" to="/Carrinho">
                        Carrinho
                    </Link>
                </Button>
            </div>
        </div>
    );
}


export default ButtonBases;



/*
<AddShoppingCartIcon className="carrinho" />
    <Badge className="badgeCarrinho" badgeContent={1} color="secondary">
        <label className='sumiu' />
    </Badge>
*/
