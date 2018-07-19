import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import { Typography, Button } from '../../node_modules/@material-ui/core';
import '../App.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    paper: {
        width: 400,
        height: 450,
        alignItems: 'center',
        display: 'flex',
        marginLeft: '32%',
        marginTop: '20px',
        position: "absolute",
    },
    div: {
        backgroundColor: '#2196f3',
        width: 350,
        height: 100,
        marginLeft: 460,
        marginTop: '5px',
        position: "absolute",
        zIndex: '1',
        borderRadius: '2px',
    },
    letra: {
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '35px',
    },
    btnLogin: {
        marginTop: 60,
        backgroundColor: '#2196f3',
    },
    cor: {
        color: '#2196f3',
    },
});

class TextFields extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div >
                <div className={classes.div}>
                    <Typography variant="title" className={classes.letra}>Login</Typography>
                </div>
                <Paper className={classes.paper}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="with-placeholder"
                            label="E-mail"
                            type="Email"
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email className={classes.cor} />
                                    </InputAdornment>
                                ),
                            }} />
                        <TextField
                            id="password-input"
                            label="Senha"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle className={classes.cor} />
                                    </InputAdornment>
                                ),
                            }} />
                        <Button variant="contained" color="primary" className={classes.btnLogin}>
                            Entrar
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
