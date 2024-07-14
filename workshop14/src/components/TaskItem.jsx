import React, { memo } from "react";

const TaskItem = ({ task, index, completeTask, deleteTask, moveBackToToDo, isDone }) => {
  return (
    <div>
      {task}
      {!isDone && (
        <>
          <button className="finish" onClick={() => completeTask(index)}>Finish</button>
          <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
        </>
      )}
      {isDone && (
        <>
          <button className="move-back" onClick={() => moveBackToToDo(index)}>Move Back</button>
          <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
        </>
      )}
    </div>
  );
};
export default memo(TaskItem);