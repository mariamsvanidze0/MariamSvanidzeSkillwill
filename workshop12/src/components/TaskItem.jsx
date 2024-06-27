import React from "react";

const TaskItem = ({ task, completeTask, deleteTask, moveBackToToDo, isDone }) => {
  return (
    <div>
      {task}
      {!isDone && (
        <>
          <button className="finish" onClick={completeTask}>Finish</button>
          <button className="delete" onClick={deleteTask}>Delete</button>
        </>
      )}
      {isDone && (
        <>
          <button className="move-back" onClick={moveBackToToDo}>Move Back</button>
          <button className="delete" onClick={deleteTask}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
