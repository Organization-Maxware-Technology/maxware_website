
import Shake from 'react-reveal/Shake';
import { animateScroll as scroll } from 'react-scroll/modules';
import {FaPhoneAlt ,FaAngleRight, FaSearchLocation, FaRegEnvelope, FaClock}  from "react-icons/fa";
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer,FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink} from './FooterElements'
import { SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialLogo, WebsiteRights,
    SocialIconLink

} from './FooterElements';
const Footer = () => {
    const toggleHome=() =>{
        scroll.scrollToTop();
    }
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
                        <Shake >
                        <FooterLink to="/" > <FaAngleRight /> Blogs</FooterLink>
                        </Shake>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Info</FooterLinkTitle>
                        
                        <FooterLink to="/" > <FaPhoneAlt /> +212 6 76 76 63 45</FooterLink>
                        <FooterLink to="/"> <FaSearchLocation/> imm 56 block D,maghrib Arabi,14000</FooterLink>
                        <FooterLink to="/"><FaRegEnvelope/> contact@maxware.ma</FooterLink>
                        <FooterLink to="/"><FaClock/> Office Hours 09H:30 - 18H:00</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Linkdin</FooterLink>
                        <FooterLink to="/">Instagram </FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
            <hr color='#ff725e'/>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Maxware Technology
                    </SocialLogo>
                    <WebsiteRights>Maxware Technology ©{new Date().getFullYear()} 
                    All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer





