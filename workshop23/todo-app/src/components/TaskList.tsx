import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
