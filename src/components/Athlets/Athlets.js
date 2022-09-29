import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboySide } from '@fortawesome/free-solid-svg-icons';
import Athlet from '../Athlet/Athlet';
import './Athlets.css';
import Cart from '../Cart/Cart';

const Athlets = () => {

    const [athlets, setAthlets] = useState([]);

    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAthlets(data))
    }, [])

    const  handlerAddToCart = cart =>{
        const newCart = [...carts, cart];
        setCart(newCart);
    }

    return (
        <div className='main-section'>
            <div className="players-info">
                <h1><FontAwesomeIcon icon={faHatCowboySide}></FontAwesomeIcon> Athletics Club</h1>
                <h3>Select best althlet</h3>
                <div className="alhlet-container">
                    {
                        athlets.map(athlet => <Athlet athlet={athlet} key={athlet.id}  handlerAddToCart={handlerAddToCart}></Athlet>)
                    }
                </div>
            </div>
            <div className="cart-info">
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Athlets;