import React, { Component } from "react";
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    componentDidMount(){
       this.inputElement.focus();
    }
    render() {
        console.log('[Person.js] render Method');
        console.log(this.props, "Checking Value");
        return (
            <Aux>
                <div className={classes.Person}>
                    <p onClick={this.props.clicked} >
                        My Names is {this.props.name}, I'm {this.props.age} years of age.
            </p>
                    <div>
                        <label>Edit Name</label>
                        <input
                        ref={(inputEL)=>{this.inputElement= inputEL}}
                         type="text" onChange={this.props.changeHandler} value={this.props.name} />
                    </div>
                    <div>{this.props.children}</div>
                </div>
            </Aux>
        );
    }
};
Person.propTypes={
    clicked:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number
}

export default withClass(Person, null);