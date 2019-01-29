// ============= This Keeps Track of What's on the List =========== //
import React from "react";
import ToDo from "./ToDo";
import "./Todo.css";
import { connect } from "react-redux";

import { createToDo, toggleToDo } from "../../actions";

class ToDoList extends React.Component {
  state = {
    newToDo: ""
  };

  handleChanges = e => {
    this.setState({ newToDo: e.target.value });
  };

  addToDo = e => {
    e.preventDefault();
    this.props.createToDo(this.state.newToDo);
    this.state.newToDo = "";
  };

  toggleToDo = (e, index) => {
    e.preventDefault();
    this.props.toggleToDo(index);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addToDo} className="form-items">
          <input
            type="text"
            value={this.state.newToDo}
            onChange={this.handleChanges}
          />
          <button onClick={this.addToDo}>Add task</button>
        </form>
        <div className="toDoItem">
          {this.props.todos.map((todo, index) => (
            <h4 onClick={e => this.toggleToDo(e, index)} key={index}>
              {todo.task}
            </h4>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { createToDo, toggleToDo }
)(ToDoList);
