import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { Box, IconButton } from '@mui/material';
import { completeTask, deleteTask } from '../redux/task';
import '../App.css';

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const backgroundColor = id % 2 === 0 ? '#ffffff' : '#f0f0f0';

  return (
    <Paper 
      className="task-card"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        textDecoration: completed ? 'line-through' : 'none' ,
        backgroundColor: backgroundColor
      }}
    >
      <Box>
        <Checkbox
          checked={completed}
          onChange={() => dispatch(completeTask(id))}
        />
        <span className="task-title">{title}</span>
      </Box>
      
      <IconButton 
        aria-label="delete" 
        onClick={() => dispatch(deleteTask(id))}
        className="delete-btn"
        sx={{ 
          ml: 'auto', 
          padding: '8px',
          '@media (max-width: 600px)': { 
            padding: '4px' 
          }
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default TaskItem;
