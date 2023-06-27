import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Navigation from './Navigation';
import './App.css';
import './Utilities.css';

import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App"> 
      <Navigation /> 
      <Box pt={8} paddingX={8}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> 
      </Box> 
    </div>
  );
}

export default App;
