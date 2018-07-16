import Button from '@material-ui/core/Button';
import React from 'react';
import '../App.css';
import { Link } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { myContext } from '../Context/myContext';

function ButtonBases(props) {
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
