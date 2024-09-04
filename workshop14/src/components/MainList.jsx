import React, { useState, useCallback, useMemo } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "../App.css";

const MainList = () => {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = useCallback((task) => {
    if (task.trim()) {
      setToDoTasks((prevTasks) => [...prevTasks, task]);
    }
  }, []);

  const completeTask = useCallback((index) => {
    setToDoTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const [completedTask] = newTasks.splice(index, 1);
      setDoneTasks((prevDone) => [...prevDone, completedTask]);
      return newTasks;
    });
  }, []);

  const deleteTask = useCallback((index, listType) => {
    if (listType === "toDo") {
      setToDoTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.splice(index, 1);
        return newTasks;
      });
    } else if (listType === "done") {
      setDoneTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks.splice(index, 1);
        return newTasks;
      });
    }
  }, []);

  const moveBackToToDo = useCallback((index) => {
    setDoneTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const [taskToMove] = newTasks.splice(index, 1);
      setToDoTasks((prevToDo) => [...prevToDo, taskToMove]);
      return newTasks;
    });
  }, []);

  const toDoTasksMemo = useMemo(() => toDoTasks, [toDoTasks]);
  const doneTasksMemo = useMemo(() => doneTasks, [doneTasks]);

  return (
    <div className="both-list">
      <div className="to-do">
        <h2>To Do List</h2>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={toDoTasksMemo}
          completeTask={completeTask}
          deleteTask={(index) => deleteTask(index, "toDo")}
          moveBackToToDo={() => {}}
          isDone={false}
        />
      </div>

      <div className="done">
        <h2>Finished Tasks</h2>
        <TaskList
          tasks={doneTasksMemo}
          deleteTask={(index) => deleteTask(index, "done")}
          moveBackToToDo={moveBackToToDo}
          isDone={true}
        />
      </div>
    </div>
  );
};

export default MainList;