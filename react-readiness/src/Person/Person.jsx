import React from 'react';
const Person = (props) => {  
    return (
        <div>
            <h2>Person Details</h2>
            <div>
                <b>Name:</b>
                <span> {props.name}</span>
            </div>
            <div>
                <b>Age:</b>
                <span> {props.age}</span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Person;
