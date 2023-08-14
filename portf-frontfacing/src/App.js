import React from 'react';
import { ThemeProvider} from "@mui/material/styles";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './scenes/HomePage/homepage';
import ProjectsPage from './scenes/ProjectsPage/projectspage';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            {/* <Route/> */}
            {/* <Route element={<Layout />}/> */}
            <Route exact path='/' Component={HomePage}/>
            <Route path='/about' Component={ProjectsPage}/>
          </Routes>
        </Router>
    </div>

  );
}

export default App;
