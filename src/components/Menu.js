import Button from '@material-ui/core/Button';
import React from 'react';
import '../App.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';


function ButtonBases() {
    return (
        <div className="barraMenu">
            <img src={require('../logo.svg')} className="imagemMenu" alt=""/>
            <div className="botaoMenu">
                <Button className="bMenu" size="large" >
                    <AddShoppingCartIcon className="carrinho"/>
                    <Badge className="badgeCarrinho"  badgeContent={1}  color="secondary">
                        <label className='sumiu'/>
                    </Badge>
                </Button>
            </div>
        </div>
    );
}


export default ButtonBases;

