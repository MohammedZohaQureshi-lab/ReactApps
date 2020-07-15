import React from 'react';
import Person from './Person/Person'
const Persons = (props) => (
    props.persons.map((el, index) => {
        return <Person key={el.id} name={el.name} age={el.age}
            changeHandler={event => props.changed(event, el.id)}
            clicked={() => props.click(index)} />
    })
)

export default Persons;
