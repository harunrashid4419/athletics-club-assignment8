const addToLocalStorage = (props) =>{
    const quantity = props;
    localStorage.setItem('Second', quantity);

}

export default addToLocalStorage;