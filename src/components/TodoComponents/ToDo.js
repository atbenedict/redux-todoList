//===========This is an individual ToDo Item=============

import React from "react";
// import moment from "moment";
import "./Todo.css";

function ToDo(props) {
  // let dateString = props.task.id;
  // let created = moment(dateString);
  // console.log(created);
  return (
    <div
      onClick={() => props.toggleDone(props.task.id)}
      className={`toDoItem ${props.task.completed.toString()}`}
    >
      <span className="toDoSpacer" />
      {props.task.task}
    </div>
  );
}

export default ToDo;
