import React from "react";
// import ToDo from "./components/TodoComponents/ToDo";

import ToDoList from "./components/TodoComponents/ToDoList";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
