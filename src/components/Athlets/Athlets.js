import React, { useEffect, useState } from 'react';
import Athlet from '../Athlet/Athlet';
import './Athlets.css';

const Athlets = () => {

    const [athlets, setAthlets] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAthlets(data))
    }, [])

    return (
        <div className='main-section'>
            <div className="players-info">
                <h1>Athletics Club</h1>
                <h3>Select today's althlet</h3>
                <div className="alhlet-container">
                    {
                        athlets.map(athlet => <Athlet athlet={athlet} key={athlet.id}></Athlet>)
                    }
                </div>
            </div>
            <div className="cart-info">
                <div className="cart-header">
                    <img src="" alt="" />
                    <div className='self-info'>
                        <h2>Md. Harun or rashid</h2>
                        <p>Natore, Rajshahi</p>
                    </div>
                    <div className="weight">
                        <div>
                            <h3>75<small>kg</small></h3>
                            <h4>Weight</h4>
                        </div>
                        <div>
                            <h3>5.8</h3>
                            <h4>Height</h4>
                        </div>
                        <div>
                            <h3>22 <small>yrs</small></h3>
                            <h4>Age</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Athlets;