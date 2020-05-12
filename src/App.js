import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import String from './components/String_Num';
import './App.css';
import String_Num from './components/String_Num';
import Colorful from './components/Colorful';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path = "/Home"/>
        <String_Num path = "/:param"/>
        <Colorful path = "/:word/:txtcolor/:bgcolor"/>
      </Router>
    </div>
  );
}
export default App;
