import React from 'react';

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
            <p>{number}</p>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleIncrement}>+1</button>
        </div>
        
    )

};

export default ItemCount;
