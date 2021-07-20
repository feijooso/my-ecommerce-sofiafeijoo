import React from 'react';
import ItemCount from '../itemCount/itemCount';
import { useCartContext } from '../../context/cartContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 10,
    },
    media: {
      height: 240,
    },
  }); 

function ItemDetail(props) {
    const classes = useStyles();
    const {addToCart, getActualStock} = useCartContext();

    const actualStock = getActualStock(props.item);
    
    const onAdd = cant => {
      addToCart(props.item, cant)
    };
    return (
        <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                        className={classes.media}
                        image= {props.item.img}
                        title={props.item.title}
                />
                <CardContent>

                    <Typography gutterBottom variant="h3" component="h2">
                        {props.item.title}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="h3">
                        Precio: ${props.item.price}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {props.item.description}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Stock: {actualStock}
                    </Typography>

                </CardContent>
                </CardActionArea>

                <CardActions>
                {actualStock > 0 && <ItemCount stock={actualStock} onAdd={onAdd}/>}
                {actualStock <= 0 && <p>Sin stock</p>}
                </CardActions>
            </Card>
        </div>
    )
}

export default ItemDetail
