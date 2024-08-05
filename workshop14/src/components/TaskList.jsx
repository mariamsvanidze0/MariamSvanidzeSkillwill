import React, { memo } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, completeTask, deleteTask, moveBackToToDo, isDone }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
          moveBackToToDo={moveBackToToDo}
          isDone={isDone}
        />
      ))}
    </div>
  );
};

export default memo(TaskList);
