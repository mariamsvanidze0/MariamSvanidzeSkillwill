import React, { useState, useCallback } from "react";

const TaskInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = useCallback((event) => {
    setNewTask(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    addTask(newTask);
    setNewTask("");
  }, [addTask, newTask]);

  return (
    <div>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TaskInput;