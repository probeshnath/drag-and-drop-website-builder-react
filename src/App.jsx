// App.js
import React from 'react';
import Toolbar from './Toolbar';
import Website from './Website';

function App() {
  return (
    <div className='flex w-full max-w-7xl mx-auto'>
      <Toolbar />
      <Website />
    </div>
  );
}

export default App;
