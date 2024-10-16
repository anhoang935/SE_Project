import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  // Function to check if the backend is connected
  const checkBackendConnection = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/test');
      setBackendMessage(response.data.message); // Set the backend response
    } catch (error) {
      console.error('Error connecting to the backend:', error);
      setBackendMessage('Failed to connect to the backend');
    }
  };

  // Run the check when the component mounts
  useEffect(() => {
    checkBackendConnection();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{backendMessage}</p> {/* Show the backend message */}
      </header>
    </div>
  );
}

export default App;
