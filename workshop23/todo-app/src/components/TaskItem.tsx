import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion, editTask } from '../features/tasks/taskSlice';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleEdit = () => {
    if (isEditing && editedName.trim()) {
      dispatch(editTask({ id: task.id, name: editedName }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      ) : (
        <span onClick={handleToggle}>{task.name}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
