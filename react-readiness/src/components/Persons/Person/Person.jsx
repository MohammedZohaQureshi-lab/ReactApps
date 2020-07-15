import React from "react";
import classes from './Person.css';
const Persons = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.clicked} >
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

export default Persons;