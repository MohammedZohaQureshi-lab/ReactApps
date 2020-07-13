import React, { Component, useState } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 25 },
      { name: "Mia", age: 19 },
      { name: "Tony", age: 42 }
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Max", age: 26 },
        { name: "Mia Davis", age: 19 },
        { name: "Tom", age: 35 }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 25 },
        { name: event.target.value, age: 19 },
        { name: "Tony", age: 42 }
      ]
    })
  }

  render() {
    return (<div className="App">
      <h1>My React App</h1>
      <button onClick={this.switchNameHandler}>Switch NAme</button>
      <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changeHandler={this.changeNameHandler} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>);
  }
}

export default App;


// const App = props => {
//   const [personState, setNewPersonState] = useState({
//     persons: [
//       { name: "Max", age: 25 },
//       { name: "Mia", age: 19 },
//       { name: "Tony", age: 42 }
//     ]
//   });
//   const [otherState, setOtherState] = useState({
//     otherState: "Other States"
//   })

//   const switchNameHandler = () => {
//     setNewPersonState({
//       persons: [
//         { name: "Max", age: 26 },
//         { name: "Mia Davis", age: 19 },
//         { name: "Tom", age: 35 }
//       ]
//     })
//   }
//   console.log(personState, otherState);
//   return (
//     <div className="App">
//       <h1>My React App</h1>
//       <button onClick={switchNameHandler}>Switch NAme</button>
//       <Person click={this.switchNameHandler} name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//     </div>
//   );

// }

// export default App;