import React from 'react';

function itemDetail(props) {
    //console.log(props);
    return (
        <div>
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>                        
        </div>
    )
}

export default itemDetail
