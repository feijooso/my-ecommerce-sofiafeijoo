import React, {useState, useEffect} from 'react';
import { useCartContext } from '../../context/cartContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 20,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Cart = () => {
  const { cart, clearCart, removeItem } = useCartContext();
  const classes = useStyles();
  const [total, setTotal] = useState(0);

  const precioPorProducto = () => {
    let total = cart.map(producto => producto.price*producto.cantidad).reduce((acum,valor) => {
      return acum + valor;
    }, 0)
    setTotal(total);
  }

  useEffect(() => {
    precioPorProducto();
  }, [cart]);  

  if (!cart.length) return (
    <div>
      <p>Carrito vacio</p>
      <Link to="/tienda" className="Link">
        <Button color="primary">Ir a la tienda</Button>
      </Link>
    </div>
    );

  return (
    <div className={classes.root}>
        <Grid item xs={12} container direction="row" justify="center" alignItems="center">
          <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>Resumen de la compra</Typography>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <List disablePadding >
              {cart.map((item) => (
                <ListItem className={classes.listItem} key={item.title}>
                  <ListItemText primary={item.title}/>
                  <Typography variant="body1">{item.cantidad}x ${item.price}</Typography>
                  <DeleteIcon onClick={()=>removeItem(item.id)}></DeleteIcon>
                </ListItem>
              ))}
              <ListItem className={classes.listItem}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" className={classes.total}>
                  ${total}
                </Typography>
              </ListItem>
            </List>
            </div>

            <Link to="/tienda" className="Link">
              <Button variant="contained" onClick={clearCart} color="primary">Vaciar carrito</Button>
            </Link>

            <Link to="/checkout" className="Link">
                    <Button variant="contained" color="primary">Finalizar compra</Button>
            </Link>
          </Paper>
        </Grid>
    </div>
  )
}

export default Cart