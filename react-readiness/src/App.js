import React, { Component } from 'react';
//import React, { useState } from 'react';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit'
import './App.css';
import classes from './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor')
  }
  state = {
    persons: [
      { id: "asvh", name: "Max", age: 25 },
      { id: "jsde", name: "Mia", age: 19 },
      { id: "ntfg", name: "Tony", age: 42 },
      { id: "xsna", name: "Jane", age: 21 }
    ],
    showPersons: true,
    showCockpit: true
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
    console.log('[App.js]  render Method')
    let persons = null;
    if (this.state.showPersons) {
      persons = <div className={classes.personWrapper}><Persons persons={this.state.persons} changed={this.changeNameHandler} click={this.deletePersonHandler} /></div>
    }

    return (
      <div className={classes.App}>
        {this.state.showCockpit ?<button onClick={() => this.setState({ showCockpit: false })}> Remove Cockpit</button>:null}
        {this.state.showCockpit ? <Cockpit clicked={this.togglePersonsHandler} title={this.props.appTitle} personsLength={this.state.persons.length} showPersons={this.state.showPersons} /> : null}
        {persons}
      </div>
    );
  }
  componentDidMount() {
    console.log('[App.js]  ComponentDidMount Method')
  }
  // componentWillMount() {
  //   console.log('[App.js]  componentWillMount Method')
  // }
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
//       <Persons click={this.switchNameHandler} name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Persons name={personState.persons[1].name} age={personState.persons[1].age} />
//       <Persons name={personState.persons[2].name} age={personState.persons[2].age} />
//     </div>
//   );

// }

// export default App;