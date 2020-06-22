import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInformation from '../components/UserInformation.connect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInformation />
      </header>
    </div>
  );
}

export default App;
