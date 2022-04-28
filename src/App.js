import React ,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages';
import ContactUsPage from './Pages/ContactUs';
import scrollreveal from 'scrollreveal';

function App() {
  useEffect(()=> {
    const sr= scrollreveal({
      origin: "top",
      distance: "50px",
      duration: 1000,
      reset:true,
    });
    sr.reveal(
      `
      nav,
      #home,
      #about,
      #discover,
      #contactUs,
      #services,
      #solutions,
      footer`,{
          opacity:0,
          interval:300,
      }

    )
  },[]);
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

