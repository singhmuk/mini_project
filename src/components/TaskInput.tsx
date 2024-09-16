import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { addTask } from '../redux/task';
import "../App.css";

const TaskInput: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask(taskTitle));
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task"
        className="task-input"
      />
      <Button variant="contained" className='btn_text' onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default TaskInput;
