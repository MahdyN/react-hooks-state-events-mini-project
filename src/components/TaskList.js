import React from "react";
import Task from "./Task"

function TaskList({taskList, handleDelete}) {
 

  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task key = {task.text} text = {task.text} category = {task.category} deleteTask ={handleDelete}  />
       ))}
    </div>
  );
}

export default TaskList;
