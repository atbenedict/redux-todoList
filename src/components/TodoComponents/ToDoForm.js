// ================ This is the Input and Control Form ================= //

import React from "react";
import "./Todo.css";
function ToDoForm(props) {
  return (
    <div className="form-items">
      <form tabIndex="1" autoComplete="off" onSubmit={props.addNewToDo}>
        <input
          value={props.toDoItem}
          type="text"
          name="toDoItem"
          placeholder="Task"
          onChange={props.handleChanges}
        />
      </form>
      <div className="buttons">
        <button
          tabIndex="2"
          className="Add"
          type="submit"
          onClick={props.addNewToDo}
        >
          Add Task
        </button>
        <button
          tabIndex="3"
          className="Remove"
          type="submit"
          onClick={props.clearComplete}
        >
          Remove Completed
        </button>
      </div>
    </div>
  );
}

export default ToDoForm;
