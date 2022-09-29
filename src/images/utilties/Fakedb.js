const addToLocalStorage = (value) =>{
    const second = value;
    localStorage.setItem('Second', JSON.stringify(second));
}

const getStoredSecond = () =>{
    const storedSecond = localStorage.getItem('Second');
    return storedSecond;
}

export {
    addToLocalStorage,
    getStoredSecond,
};