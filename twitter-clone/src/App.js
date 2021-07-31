import './App.css';
import React, {Component, useState, useEffect } from 'react';
import Sidebar from './Components/SidebarComponent';
import Feed from './Components/FeedComponent';

function App() {
  return (
    <div className="App">
      <div className="app__sidebar">
        <Sidebar />
      </div>

      <div className="app__feed">
        <Feed />
      </div>

      <div className="app__widget">

      </div> 

    </div>
  
  );
}

export default App;
