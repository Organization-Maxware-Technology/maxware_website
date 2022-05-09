import React ,{useState} from 'react'
import { Button } from '../ButtonElements'
import Icon1 from '../images/svg-4.svg'
import Icon2 from '../images/svg-5.svg'
import Icon3 from '../images/svg-6.svg'
import Icon4 from '../images/svg-9.svg'
import Slide from 'react-reveal/Slide';
import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,ServicesIcon,
        ServicesCard,
        ServicesH2,SerBtnWrapper,
        ServicesP,ArrowForward,ArrowRight
        } from './ServicesElements'

const Services = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }
  return (
    <ServicesContainer id="services">
        <Slide><ServicesH1>Our Services</ServicesH1></Slide>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>ERP Development</ServicesH2>
                <ServicesP>Need an efficient tool to manage your business,
                 Odoo is the ideal solution for any size of business from the self-employed entrepreneur
                to small and medium-sized businesses.
                </ServicesP>
                <SerBtnWrapper >
                <Button to='services' 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                 >
                Read more {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </SerBtnWrapper>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Council</ServicesH2>
                <ServicesP>
                We offer tailor-made consulting services to companies from all sectors and in different situations.We advise you on organizational and structural changes
                organizational and structural changes
                </ServicesP>
                <SerBtnWrapper>
                <Button to='services' 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                 >
                Read more {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </SerBtnWrapper>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} height="100px"/>
                <ServicesH2>Website creation</ServicesH2>
                <ServicesP>
                From a simple website presence to a custom development, 
                we have all the technical skills necessary to meet your needs.
                our teams are in permanent research of new best-practices in this field.
                </ServicesP>
                <SerBtnWrapper>
                <Button to='services' 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                 >
                Read more {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </SerBtnWrapper>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Mobile application</ServicesH2>
                <ServicesP>
                Whatever the size of your mobile application, hybrid or native, 
                we will take care of it from development to deployment.
                
                </ServicesP>
                <SerBtnWrapper>
                <Button to='services' 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                 >
                Read more {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </SerBtnWrapper>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services