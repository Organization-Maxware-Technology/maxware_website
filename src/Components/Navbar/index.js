import React, {useEffect, useState}from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../images/finlogo2.png'
import { StickyNav } from 'react-js-stickynav'
import { animateScroll as scroll } from 'react-scroll';
import { Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon, 
    NavMenu,
    NavItem,
    NavBtn,
    NavBtnLink,
    NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav =() => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome =() =>{
        scroll.scrollToTop();
    }



    return (
    <>  
        <StickyNav length='40'>
        <Nav scrollNav={scrollNav} >
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}> 
                <img src={logo} alt="logo" />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="solutions" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>Solutions</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to="/contactUs">Contact Us</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </StickyNav>
        

    </>
  )
}

export default Navbar;