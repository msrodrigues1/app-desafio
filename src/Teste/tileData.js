import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Carrinho from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router';
import '../App.css';
import Badge from '@material-ui/core/Badge';
import { myContext } from '../Context/myContext';

export const mailFolderListItems = (
    <div>
        <ListItem button>
            <Link className="botaoLink1" to="/">
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText className="listDrawers" primary="Home" />
            </Link>
        </ListItem>
        <myContext.Consumer>
            { teste => (
        <ListItem button>
            <Link className="botaoLink2" to="/Carrinho">
                <Badge badgeContent={teste.qtdPedidos()} color="secondary">
                    <ListItemIcon>
                        <Carrinho />
                    </ListItemIcon>
                </Badge>
                <ListItemText primary="Carrinho" />
            </Link>
        </ListItem>
            )}
        </myContext.Consumer>
    </div>
);
