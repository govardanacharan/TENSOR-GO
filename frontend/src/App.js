import React, { useState } from 'react';
import GoogleAuth from './components/GoogleAuth';
import Dashboard from './components/Dashboard';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className="App">
      {token ? <Dashboard /> : <GoogleAuth onSuccess={setToken} />}
    </div>
  );
};

export default App;
