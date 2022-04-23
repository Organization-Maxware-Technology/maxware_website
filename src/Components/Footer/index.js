import React from 'react'
import {FaPhoneAlt ,FaAngleRight, FaSearchLocation, FaRegEnvelope, FaClock}  from "react-icons/fa";
import { FooterContainer,FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink} from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">MAXWARE TECHNOLOGY is a computer engineering
                                        services company involved in the development of 
                                        customized computer solutions. We intervene in many custom developments with a fixed price commitment 
                                        guaranteeing a control of risks and costs to our customers.
                         </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Catégories</FooterLinkTitle>
                        <FooterLink to="/"><FaAngleRight/> Blogs </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Info</FooterLinkTitle>
                        <FooterLink to="/"> <FaPhoneAlt/> +212 6 76 76 63 45</FooterLink>
                        <FooterLink to="/"> <FaSearchLocation/> imm 56 block D,maghrib Arabi,14000</FooterLink>
                        <FooterLink to="/"><FaRegEnvelope/> contact@maxware.ma</FooterLink>
                        <FooterLink to="/"><FaClock/> Office Hours 09H:30 - 18H:00</FooterLink>
                    </FooterLinkItems>
                    
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer





