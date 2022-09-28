import React from 'react';
import './Athlet.css';

const Athlet = ({athlet}) => {
    const {img, name, age, description, time} = athlet;
    return (
        <div className='single-athlet'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>For Age: {age}</p>
            <p>For required {time}</p>
            <button>Add To list</button>
        </div>
    );
};

export default Athlet;