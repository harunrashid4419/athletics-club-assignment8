import React from 'react';
import './Athlet.css';

const Athlet = (props) => {
    const {img, name, age, description, time} = props.athlet;
    return (
        <div className='single-athlet'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>For Age: {age}</p>
            <p>For required {time}</p>
            <button onClick={() => props.handlerAddToCart(props.athlet)}>Add To list</button>
        </div>
    );
};

export default Athlet;