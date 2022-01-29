import React from 'react';

const ChildComponent = (props) => {
    return <button onClick={() => props.greetHandler('Sodhi SIngh Jr.')}>Greet Parent</button>;
};

export default ChildComponent;
