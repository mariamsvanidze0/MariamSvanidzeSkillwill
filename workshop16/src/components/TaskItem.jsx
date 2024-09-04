import React, { memo } from "react";

const TaskItem = ({ task, index, moveTask, deleteTask, listType }) => {
  const moveOptions = [
    { list: "toDo", label: "To Do" },
    { list: "inProgress", label: "In Progress" },
    { list: "done", label: "Done" }
  ].filter(option => option.list !== listType);

  return (
    <div className="task-item">
      <span>{task}</span>
      <div className="task-buttons">
        {moveOptions.map(option => (
          <button
            key={option.list}
            className={option.list}
            onClick={() => moveTask(index, option.list)}
          >
            {option.label}
          </button>
        ))}
        <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
};

export default memo(TaskItem);
