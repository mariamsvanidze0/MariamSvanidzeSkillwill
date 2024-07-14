import React, { useState, useCallback, useMemo } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import styles from "../App.module.css"; 
import styled from "styled-components"; 

const MainList = () => {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = useCallback((task) => {
    if (task.trim()) {
      setToDoTasks((prevTasks) => [...prevTasks, task]);
    }
  }, []);

  const moveTask = useCallback((index, fromList, toList) => {
    const listSetters = {
      toDo: setToDoTasks,
      inProgress: setInProgressTasks,
      done: setDoneTasks,
    };

    const fromTasks = {
      toDo: toDoTasks,
      inProgress: inProgressTasks,
      done: doneTasks,
    };

    const taskToMove = fromTasks[fromList][index];

    listSetters[fromList]((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });

    listSetters[toList]((prevTasks) => [...prevTasks, taskToMove]);
  }, [toDoTasks, inProgressTasks, doneTasks]);

  const deleteTask = useCallback((index, listType) => {
    const listSetters = {
      toDo: setToDoTasks,
      inProgress: setInProgressTasks,
      done: setDoneTasks,
    };

    const setList = listSetters[listType];

    setList((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }, []);

  const toDoTasksMemo = useMemo(() => toDoTasks, [toDoTasks]);
  const inProgressTasksMemo = useMemo(() => inProgressTasks, [inProgressTasks]);
  const doneTasksMemo = useMemo(() => doneTasks, [doneTasks]);

  return (
    <div className={styles.bothList}>
      <TaskColumn className={styles.toDo}>
        <h2>To Do List</h2>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={toDoTasksMemo}
          moveTask={(index, toList) => moveTask(index, "toDo", toList)}
          deleteTask={(index) => deleteTask(index, "toDo")}
          listType="toDo"
        />
      </TaskColumn>

      <TaskColumn className={styles.inProgress}>
        <h2>In Progress</h2>
        <TaskList
          tasks={inProgressTasksMemo}
          moveTask={(index, toList) => moveTask(index, "inProgress", toList)}
          deleteTask={(index) => deleteTask(index, "inProgress")}
          listType="inProgress"
        />
      </TaskColumn>

      <TaskColumn className={styles.done}>
        <h2>Finished Tasks</h2>
        <TaskList
          tasks={doneTasksMemo}
          moveTask={(index, toList) => moveTask(index, "done", toList)}
          deleteTask={(index) => deleteTask(index, "done")}
          listType="done"
        />
      </TaskColumn>
    </div>
  );
};

export default MainList;

const TaskColumn = styled.div`
  width: 30%;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &.toDo {
    border: 2px solid #f44336;
  }

  &.inProgress {
    border: 2px solid #2196f3;
  }

  &.done {
    border: 2px solid #4caf50;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #555;
  }
`;
