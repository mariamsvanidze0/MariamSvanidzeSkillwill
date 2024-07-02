import React, { Component } from "react";

class TaskItem extends Component {
  shouldComponentUpdate(nextProps) {
    const shouldUpdate =
      nextProps.task !== this.props.task ||
      nextProps.isDone !== this.props.isDone;
    // console.log("TaskItem shouldComponentUpdate:", shouldUpdate, "for task:", this.props.task);
    return shouldUpdate;
  }

  render() {
    // console.log("TaskItem render for task:", this.props.task);
    const { task, index, completeTask, deleteTask, moveBackToToDo, isDone } = this.props;
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
  }
}

export default TaskItem;
