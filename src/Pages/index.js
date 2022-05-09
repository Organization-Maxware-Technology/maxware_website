import React, {Fragment, useState} from 'react'
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import {   homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar'
import Services from '../Components/Services';
import Sidebar from '../Components/Sidebar';
import Solutions  from '../Components/Solutions';


const Home = () => {
    const[isOpen,setIsOpen] =useState(false);

    const toggle= () =>{
        setIsOpen(!isOpen);
    }
    

  return (
    <>
        <Fragment>
            <Navbar toggle={toggle}/>
            <div style={{overflowY:"scroll"}}></div>
        </Fragment>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
          
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Services/>
        <Solutions/>
        <Footer/>
    </>
  )
}

export default Home;