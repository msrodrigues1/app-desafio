import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//import Modal from './botaoModal';
import Modal from '@material-ui/core/Modal';

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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '2px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 60,
    height: '350px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 12,
  },
  tamanho: {
    paddingBottom: '10px',
  },
});



class ButtonBases extends React.Component {

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
      <div className={classes.root}>
        <ButtonBase
          onClick={this.handleOpen}
          focusRipple key={this.props.title} className={classes.image}
          focusVisibleClassName={classes.focusVisible} style={{ width: this.props.width, }}>
          <span className={classes.imageSrc} style={{ backgroundImage: `url(${this.props.url})`, }} />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography component="span" variant="subheading" color="inherit" className={classes.imageTitle}>
              {this.props.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </ButtonBase>
          <Modal livro={this.props.livro} aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open} onClose={this.handleClose}
            >
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
              </div>
            </div>
          </Modal>
      </div>
    );
  }
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(ButtonBases);


export default SimpleModalWrapped;