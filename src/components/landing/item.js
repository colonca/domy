import React from "react";

const Item = (props) => {
    const {titulo,descripcion,color} = props;
    return (
        <div className="item">
            <h5 style={{'color':color}}>{titulo}</h5>
            <p>{descripcion} </p>
        </div>
    );
}


export default Item;