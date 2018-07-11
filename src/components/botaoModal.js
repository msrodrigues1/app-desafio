import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function getModalStyle() {
  const top = 50;
  const left = 47.5;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 12,
  },
  tamanho: {
    paddingBottom: '10px',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div >
        <Button onClick={this.handleOpen}> <label className='sumiu'/> </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.tamanho} variant="title" id="modal-title">
              {this.props.livro === undefined ? '' : this.props.livro.nome}
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {this.props.livro === undefined ? '' : this.props.livro.desc}
            </Typography>
            <div>             
            </div>
            <div className="btnCartModal">
            <Typography variant="title" className="txtModalValor" id="simple-modal-description">
              Valor: {this.props.livro.preco}
            </Typography>
              <Button className="btnModalValor" variant="contained" color="primary">
                <AddShoppingCartIcon />
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
