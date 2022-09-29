import React from 'react';
import './Qustions.css';

const Qustions = () => {
    return (
        <div className='qustion-container'>
            <h1>Question and answeer:</h1>
            <div className="qustion">
                <h2>1. How does react work?</h2>
                <p>ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree. Whenever there's a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing.</p>
            </div>
            <div className="qustion">
                <h2>2. What is the different between props and state?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div className="qustion">
                <h2>3. Where is UseEffect used other than loading data?</h2>
                <p>useEffect keeps counting even though it should only count once! useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. Some effects require cleanup to reduce memory leaks. Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.We do this by including a return function at the end of the useEffect Hook.</p>
            </div>
        </div>
    );
};

export default Qustions;