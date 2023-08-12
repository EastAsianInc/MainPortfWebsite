import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './scenes/HomePage/homepage';
import ProjectsPage from './scenes/ProjectsPage/projectspage';

function App() {
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
      </header>
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route/> */}
          <Route exact path='/' Component={HomePage}/>
          <Route path='/about' Component={ProjectsPage}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
