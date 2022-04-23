import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages';
import ContactUsPage from './Pages/ContactUs';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/contactUs' element={<ContactUsPage/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;

