import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  shouldComponentUpdate(nextProps) {
    const shouldUpdate = nextProps.tasks !== this.props.tasks;
    // console.log("TaskList shouldComponentUpdate:", shouldUpdate);
    return shouldUpdate;
  }

  render() {
    // console.log("TaskList render");
    const { tasks, completeTask, deleteTask, moveBackToToDo, isDone } = this.props;
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
  }
}

export default TaskList;
