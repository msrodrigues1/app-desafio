import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Carrinho from "./components/Carrinho";
import Grid from './components/Grid';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Login from './Teste/telaLogin';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Grid}/>
            <Route path="/Carrinho" component={Carrinho} />
            <Route path="/Login" component={Login} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
