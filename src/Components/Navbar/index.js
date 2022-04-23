import React, {useEffect, useState}from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules';
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
        if(Window.scrollY >= 80){
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
        <Nav scrollNav={scrollNav} >
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}> 
                    Maxware
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
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
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

    </>
  )
}

export default Navbar;