import React from 'react'
import { SidebarContainer,
  Icon, 
  CLoseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
 } from './sidebarElements'



const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CLoseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to='discover' onClick={toggle}>
              Discover
            </SidebarLink>
            <SidebarLink to='services' onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to='solutions' onClick={toggle}>
              Solutions
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="/contactUs">Contact Us</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar