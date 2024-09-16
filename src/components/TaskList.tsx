import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { RootState } from '../redux/store';
import TaskItem from './TaskItem';
import { setTasks } from '../redux/task';
import { fetchTasks } from '../api/tasksApi';
import '../App.css';

const TaskList: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTasks().then((response) => dispatch(setTasks(response.data)));
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
        <Stack direction="row" spacing={2} className='btn_group'>
            <Button variant="contained" className='btn_fonts' onClick={() => setFilter('all')}>All</Button>
            <Button variant="contained" className='btn_fonts' color="success" onClick={() => setFilter('completed')}>Completed</Button>
            <Button variant="contained" className='btn_fonts' color="error" onClick={() => setFilter('pending')}>Pending</Button>
        </Stack>
        
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
