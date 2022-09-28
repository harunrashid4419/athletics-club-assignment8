import React from 'react';

const Athlet = ({athlet}) => {
    const {img, name, age, description, time} = athlet;
    return (
        <div>
            <h2>{athlet.name}</h2>
        </div>
    );
};

export default Athlet;