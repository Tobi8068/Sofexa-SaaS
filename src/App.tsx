import React from 'react';
import Dashboard from './pages/dashboard';
const App: React.FC = () => {

  return (
    <div className="flex h-screen bg-gray-100 w-full">
      <Dashboard></Dashboard>
    </div>
  );
};

export default App;