import React from 'react';
import classes from './Cockpit.css';
const Cockpit = props => {
    let assignedClasses = [];
    let btnClass = [];
    if (props.showPersons) {
        assignedClasses = [classes.Bold];
        btnClass = [classes.Button, classes.Green];
    }
    else {
        assignedClasses = [classes.Bold, classes.ColorRed];
        btnClass = [classes.Button];

    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>It's Working</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>
                Toggle Element
        </button>
        </div>
    );

}

export default Cockpit;