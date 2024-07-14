import React, { memo } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, moveTask, deleteTask, listType }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          moveTask={moveTask}
          deleteTask={deleteTask}
          listType={listType}
        />
      ))}
    </div>
  );
};

export default memo(TaskList);
