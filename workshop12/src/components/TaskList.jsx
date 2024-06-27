import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    return (
      <div className={this.props.isDone ? "done-list" : "to-do-list"}>
        {this.props.tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            completeTask={() => this.props.completeTask(index)}
            deleteTask={() => this.props.deleteTask(index)}
            isDone={this.props.isDone}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
