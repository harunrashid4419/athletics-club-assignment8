import profile from '../../images/profile.jpg';
import React from 'react';

const Cart = ({carts}) => {
    let second = 0;
    for(const cart of carts){
        second = second + parseFloat(cart.time);
    }
    return (
        <div>
            <div className="cart-header">
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className='self-info'>
                        <h2>Md. Harun or rashid</h2>
                        <p>Natore, Rajshahi</p>
                    </div>
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
                        <h3>22<small>yrs</small></h3>
                        <h4>Age</h4>
                    </div>
                </div>
                <h2>Exercise Details</h2>
                <div className="exercise-time">
                    <h3>Exercise time</h3>
                    <p>{second} seconds</p>
                </div>
                <div className="break-time">
                    <h3>Break time</h3>
                    <p>seconds</p>
                </div>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;