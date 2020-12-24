import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  // console.log(timelineData);

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada Lovelace's Social Media Feed</h1>
      <Timeline events = {timelineData.events} />
        <h1 className="App-title"></h1>
      </header>
      <main className="App-main">
      </main>
    </div>
  );
}

export default App;
