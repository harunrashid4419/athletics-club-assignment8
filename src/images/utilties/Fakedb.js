const addToLocalStorage = (value) =>{
    const second = value;
    localStorage.setItem('Second', JSON.stringify(second));
    // console.log(value)
}
const getStoredSecond = () =>{
    const storedSecond = localStorage.getItem('Second');
    return storedSecond;
}

export default addToLocalStorage;
export {
    getStoredSecond,
}