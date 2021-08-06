import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {itemsCollection} from '../../firebase'; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  })

export default function ProductsPreview(){
    const [items, setItems] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        (async ()=> {
            const response = await itemsCollection.collection("productos").get();
            setItems(response.docs.map(item => ({id:item.id, ...item.data()})))
        })();
    },)

    return(
        <>
        <ul>
            {items.slice(5,12).map((producto)=>(
                <div className={classes.root}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={producto.img}
                            title={producto.title}
                            />
                        </CardActionArea>
                    </Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {producto.title}
                        </Typography>
                    </CardContent>
                </div>
             ))}
        </ul>
        <Link to="/tienda" className="Link">
            <Button variant="contained" color="primary"> Ver todo</Button>
        </Link>
        
        </>
    );

}