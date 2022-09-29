import profile from '../../images/profile.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';
import { addToLocalStorage, getStoredSecond } from '../../images/utilties/Fakedb';
import { useEffect, useState } from 'react';

const Cart = ({ carts }) => {

    // count second and show on exersice time
    let second = 0;
    for (const cart of carts) {
        second = second + parseFloat(cart.time);
    }

    // toasify code
    const notify = () => {
        toast.success('🦄 activity complited!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    // break time value set
    const [value, setValue] = useState(0);

    // button handler
    const handleAddToBreak = (value) => {
        addToLocalStorage(value);  
        setValue(value);     
    }
    
    // get the value of local storage and show on break time
    useEffect( () =>{
        const storedSecond = getStoredSecond();
        if(storedSecond){
            setValue(storedSecond)
       }
    }, [])
    
    return (
        <div>
            <div className="cart-header">
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className='self-info'>
                        <h2>Md. Harun or rashid</h2>
                        <p>Email: harunrashid4419@gmail.com</p>
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
                <h2>Add A Break</h2>
                <div className="break">
                    <p onClick={() => handleAddToBreak(50)}>50s</p>
                    <p onClick={() => handleAddToBreak(30)}>30s</p>
                    <p onClick={() => handleAddToBreak(20)}>20s</p>
                    <p onClick={() => handleAddToBreak(90)}>90s</p>
                </div>
                <h2>Exercise Details</h2>
                <div className="exercise-time">
                    <h3>Exercise time</h3>
                    <p>{second} seconds</p>
                </div>
                <div className="break-time">
                    <h3>Break time</h3>
                    <p>{value} seconds</p>
                </div>
                <button className='activity-btn' onClick={notify}>Activity Completed</button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default Cart;