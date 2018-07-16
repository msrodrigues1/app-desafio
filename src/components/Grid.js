import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Livros from './Livros';
import Botao from './Botao';
import Tooltip from '@material-ui/core/Tooltip';
import { myContext } from '../Context/myContext';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles1 = () => ({
    success: {
        backgroundColor: green[600],
    }
});

function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className="snackbarContent"
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className="msgScankBar">
                    <Icon className="icon"/>
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class GuttersGrid extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        return (
            <myContext.Consumer>
                {testeClick => (
                    <Grid container className="root" justify="center">
                        <Grid item xs={9} >
                            <Grid container className="top">
                                {Livros.map(value => (
                                    <Grid key={value.codigo} item >
                                        <Paper className="paper">
                                            <div className="imgT">
                                                <Botao livro={value} title={value.nome} width='50%' url={require('../img/' + value.img)} />
                                            </div>
                                        </Paper>
                                        <a onClick={this.handleClick}>
                                            <IconButton onClick={() => testeClick.click(value)} value="" color="primary" className="button" aria-label="Adicionar ao Carrinho de Compras">
                                                <Tooltip leaveDelay={100} title="Adicionar no Carrinho">
                                                    <AddShoppingCartIcon />
                                                </Tooltip>
                                            </IconButton>
                                        </a>
                                        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                                            open={this.state.open} autoHideDuration={1200} onClose={this.handleClose}>
                                            <MySnackbarContentWrapper onClose={this.handleClose}
                                                variant="success" message="Produto Adicionado no Carrinho!"/>
                                        </Snackbar>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </myContext.Consumer>
        );
    }
}

export default (GuttersGrid);