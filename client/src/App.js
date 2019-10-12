import React from 'react';
import './App.scss';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/docs-theme/lib/css/docs-theme.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      </Router>
    </div>
  );
}

export default App;
