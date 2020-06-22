import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInformation from '../components/UserInformation.connect';

/* Creating User Information Applition */
function App() {
  return (
    <div >
      <h1 className="appHeader" >User Information System</h1>
        <UserInformation />
    </div>
  );
}

export default App;
