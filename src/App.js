
import React, { useState } from 'react';

import ToDoList from './ToDoList';

function App() {
  
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <div>
      <h1>My To-Do List</h1>
      {/* Passing tasks to the ToDoList component */}
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
