import React from "react";

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click} >
                My Names is {props.name}, I'm {props.age} years of age.
            </p>
            <div>
                <label>Edit Name</label>
                <input type="text" onChange={props.changeHandler} value={props.name} />
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default Person;
