import React, { Component } from "react";
import classes from './Person.css';

class Persons extends Component {
   render(){
    console.log('[Person.js] render Method');
    return (
        <div className={classes.Person}>
            <p onClick={this.props.clicked} >
                My Names is {this.props.name}, I'm {this.props.age} years of age.
            </p>
            <div>
                <label>Edit Name</label>
                <input type="text" onChange={this.props.changeHandler} value={this.props.name} />
            </div>
            <div>{this.props.children}</div>
        </div>
    );
   }
};

export default Persons;