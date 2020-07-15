import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js]  Update getDerivedStateFromProps');
        return state;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js]  Update shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js]  Update getSnapshotBeforeUpdate');
        return {message: "Test Snap"};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js]  Update componentDidUpdate');
        console.log(snapshot)
    }
    render() {
        console.log('[Persons.js] render Method')
        return (
            this.props.persons.map((el, index) => {
                return <Person key={el.id} name={el.name} age={el.age}
                    changeHandler={event => this.props.changed(event, el.id)}
                    clicked={() => this.props.click(index)} />
            })
        )
    }
}

export default Persons;
