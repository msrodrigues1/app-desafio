import Button from '@material-ui/core/Button';
import React from 'react';
import '../App.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
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
                <Button size="large" >
                    <Link className="botaoLink2" to="/Carrinho">
                        <AddShoppingCartIcon className="carrinho" />
                        <Badge className="badgeCarrinho" badgeContent={1} color="secondary">
                            <label className='sumiu' />
                        </Badge>
                    </Link>
                </Button>
            </div>
        </div>
    );
}


export default ButtonBases;
