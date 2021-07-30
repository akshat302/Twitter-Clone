import './App.css';
import React, {Component, useState, useEffect } from 'react';
import SidebarComponent from './Components/SidebarComponent';
import Sidebar from './Components/SidebarComponent';

function App() {
  return (
    <div className="App">
      <div className="app__sidebar">
        <Sidebar />
      </div>

      <div className="app__feed">
        
      </div>

      <div className="app__widget">

      </div> 

    </div>
  
  );
}

export default App;
