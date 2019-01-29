import React from "react";
// import ToDo from "./components/TodoComponents/ToDo";
import ToDoForm from "./components/TodoComponents/ToDoForm";
import ToDoList from "./components/TodoComponents/ToDoList";

const toDoData = [
  {
    task: "Organize Garage",
    id: 1547185819347,
    completed: false,
    tab: 0
  },
  {
    task: "Organize Closet",
    id: 1547185819348,
    completed: false,
    tab: 1
  },
  {
    task: "Organize Room",
    id: 1547185819349,
    completed: false,
    tab: 2
  },
  {
    task: "Organize Basement",
    id: 1547185819350,
    completed: false,
    tab: 3
  },
  {
    task: "Organize Hard Drive",
    id: 1547185819351,
    completed: false,
    tab: 4
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoData: toDoData,
      toDoItem: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewToDo = ev => {
    ev.preventDefault();
    if (this.state.toDoItem) {
      this.setState({
        toDoData: [
          {
            completed: false,
            task: this.state.toDoItem,
            id: Date.now()
          },
          ...this.state.toDoData
        ],
        toDoItem: ""
      });
    } else {
      return;
    }
  };

  toggleDone = id => {
    this.setState({
      toDoData: this.state.toDoData.map(thing => {
        if (id !== thing.id) {
          return thing;
        } else {
          return {
            ...thing,
            completed: !thing.completed
          };
        }
      })
    });
  };

  clearComplete = ev => {
    ev.preventDefault();
    this.setState({
      toDoData: this.state.toDoData.filter(
        toDoItem => toDoItem.completed === false
      )
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <ToDoForm
            addNewToDo={this.addNewToDo}
            handleChanges={this.handleChanges}
            toDoItem={this.state.toDoItem}
            clearComplete={this.clearComplete}
          />

          <ToDoList
            toDoData={this.state.toDoData}
            toggleDone={this.toggleDone}
          />
        </div>
      </div>
    );
  }
}

export default App;
