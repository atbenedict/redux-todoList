// ============= This Keeps Track of What's on the List =========== //
import React from "react";
import ToDo from "./ToDo";
import "./Todo.css";
function ToDoList(props) {
  return (
    <div>
      {props.toDoData.map((task, id) => {
        return <ToDo task={task} key={task.id} toggleDone={props.toggleDone} />;
      })}
    </div>
  );
}

export default ToDoList;
