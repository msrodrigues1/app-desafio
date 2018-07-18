import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Carrinho from "./components/Carrinho";
import Grid from './components/Grid';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import CarrinhoStore from './model/CarrinhoStore';

const carrinhoStore = new CarrinhoStore();

export let qtde = carrinhoStore.carrinho.length;

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={() => <Grid store={carrinhoStore}/>}/>
            <Route path="/Carrinho" component={() => <Carrinho store={carrinhoStore}/>} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
