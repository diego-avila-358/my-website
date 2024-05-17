//main component of applications that acts as a container for other components, it typically includes 
//routing, layout, and overall structurefor your app
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;