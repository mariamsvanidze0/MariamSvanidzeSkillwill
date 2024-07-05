import { Component } from "react";

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleSubmit = () => {
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default TaskInput;
