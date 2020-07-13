import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  const [personState, setNewPersonState] = useState({
    persons: [
      { name: "Max", age: 25 },
      { name: "Mia", age: 19 },
      { name: "Tony", age: 42 }
    ]
  });
  const [otherState, setOtherState] = useState({
    otherState: "Other States"
  })

  const switchNameHandler = () => {
    setNewPersonState({
      persons: [
        { name: "Max", age: 26 },
        { name: "Mia Davis", age: 19 },
        { name: "Tom", age: 35 }
      ]
    })
  }
  console.log(personState, otherState);
  return (
    <div className="App">
      <h1>My React App</h1>
      <button onClick={switchNameHandler}>Switch NAme</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );

}

export default App;

