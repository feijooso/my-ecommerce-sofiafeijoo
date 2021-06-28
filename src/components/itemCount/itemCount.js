import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function ItemCount (prop) {

    const [number, setNumber] = React.useState(0);

    const handleIncrement = () => {
        if(number < prop.stock)
            setNumber(number+1);
    }

    const handleDecrement = () => {
        if (number > 0)
            setNumber(number-1);

    }

    return(
        <div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={handleDecrement}>-</Button>
                <Button>{number}</Button>
                <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>
            <Button size="small" color="primary">
                Agregar al carrito
            </Button>
        </div>
        
    )

};

export default ItemCount;
