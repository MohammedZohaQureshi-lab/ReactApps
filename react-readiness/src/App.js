//import React, { useState } from 'react';
import React, { Component } from 'react';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { id: "asvh", name: "Max", age: 25 },
      { id: "jsde", name: "Mia", age: 19 },
      { id: "ntfg", name: "Tony", age: 42 }
    ],
    showPersons: false
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(el => {
      return el.id === id
    })
    const changedPerson = { ...this.state.persons[personIndex] };
    changedPerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = changedPerson
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const toggleShow = this.state.showPersons
    this.setState({
      showPersons: !toggleShow
    })
  }
  render() {
    const style = {
      minWidth: '100px',
      border: 'none',
      borderRadius: '4px',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: '#2196F3',
      color: 'white',
      margin: '5px',
      ':hover': {
        backgroundColor: '#003865'
      }
    }
    let classes = ['bold', 'red'];

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((el, i) => {
          return <Person key={el.id} name={el.name} age={el.age} changeHandler={(event) => this.changeNameHandler(event, el.id)} click={this.deletePersonHandler} />
        })}
      </div>
      )
      style.backgroundColor = "green";
      style[':hover'].backgroundColor = '#024c01';
      classes.pop();
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>My React App</h1>
          <p className={classes.join(' ')}>It's Working</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Element</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);


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