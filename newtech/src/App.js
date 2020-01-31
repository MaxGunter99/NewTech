import React from 'react';
import './App.css';
import SemanticUI from './Components/SemanticUI';
import HooksInput from './Components/Hooks';

function App() {

  return (

    <div className="App">
      <div className = 'Section'>
        <h1>Semantic-UI</h1>
        <SemanticUI/>
      </div>
      <div className = 'Section'>
        <h1>Hooks</h1>
        <HooksInput/>
      </div>
    </div>

  )

   
} 

export default App;
