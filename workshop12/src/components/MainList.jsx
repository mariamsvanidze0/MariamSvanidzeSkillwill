import { Component } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "../App.css";

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoTasks: [],
      doneTasks: [],
    };
  }

  addTask = (task) => {
    if (task.trim()) {
      this.setState((prevState) => ({
        toDoTasks: [...prevState.toDoTasks, task],
      }));
    }
  };

  completeTask = (index) => {
    this.setState((prevState) => {
      const toDoTasks = [...prevState.toDoTasks];
      const doneTask = toDoTasks.splice(index, 1);
      return {
        toDoTasks,
        doneTasks: [...prevState.doneTasks, ...doneTask],
      };
    });
  };

  deleteTask = (index, listType) => {
    if (listType === "toDo") {
      this.setState((prevState) => {
        const toDoTasks = [...prevState.toDoTasks];
        toDoTasks.splice(index, 1);
        return { toDoTasks };
      });
    } else if (listType === "done") {
      this.setState((prevState) => {
        const doneTasks = [...prevState.doneTasks];
        doneTasks.splice(index, 1);
        return { doneTasks };
      });
    }
  };

  moveBackToToDo = (index) => {
    this.setState((prevState) => {
      const doneTasks = [...prevState.doneTasks];
      const taskToMove = doneTasks.splice(index, 1);
      return {
        doneTasks,
        toDoTasks: [...prevState.toDoTasks, ...taskToMove],
      };
    });
  };

  render() {
    return (
      <div className="both-list">
        <div className="to-do">
          <h2>To Do List</h2>
          <TaskInput addTask={this.addTask} />
          <TaskList
            tasks={this.state.toDoTasks}
            completeTask={this.completeTask}
            deleteTask={(index) => this.deleteTask(index, "toDo")}
            moveBackToToDo={() => {}}
            isDone={false}
          />
        </div>

        <div className="done">
          <h2>Finished Tasks</h2>
          <TaskList
            tasks={this.state.doneTasks}
            deleteTask={(index) => this.deleteTask(index, "done")}
            moveBackToToDo={(index) => this.moveBackToToDo(index)}
            isDone={true}
          />
        </div>
      </div>
    );
  }
}

export default MainList;
