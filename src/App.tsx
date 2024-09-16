import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App: React.FC = () => {
  return (
      <div className="task-manager-container">
        <span className="header_fonts">Task Manager</span>
        <TaskInput />
        <TaskList />
      </div>
  );
};

export default App;
