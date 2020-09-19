import React from 'react';
import './App.css';
import EmojiList from './Components/EmojiList';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <EmojiList/>
    </div>
  );
}

export default App;
