const addToLocalStorage = (props) =>{
    let previousSecond = 0;

    const newSecond = props.time;
    previousSecond = previousSecond + parseFloat(newSecond);
    localStorage.setItem('Second', JSON.stringify(previousSecond));

}

export default addToLocalStorage;