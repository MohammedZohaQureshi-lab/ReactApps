import React from "react";
import Radium from "radium";

const Person = (props) => {
    let style = {
        width: "400px",
        '@media (max-width:600px)': {
            width:'90%'
        }
    };
    return (
        <div className="Person" style={style}>
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

export default Radium(Person);
