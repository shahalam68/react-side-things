import React from 'react';

const Cosmetic = (props) => {
    const {name, age, gender,_id} = props.cosmetic
    const handlePurches = id => {
        // set to local storage
        console.log(id);
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <h3> Id: {_id} age: {age}</h3>
            <h3>Gender: {gender}</h3>
            <button onClick={()=>handlePurches(_id)}>Purches</button>
        </div>
    );
};

export default Cosmetic;