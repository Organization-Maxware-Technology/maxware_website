import React from 'react'
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
import RubberBand from 'react-reveal/RubberBand';
import { Button } from '../ButtonElements';
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,Img}from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText,headline, darkText, 
    description, buttonLabel, img, alt, primary, dark , dark2}) => {
  return (
    <>
        <InfoContainer lightBg= {lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart= {imgStart}>
                    <Column1>
                     <TextWrapper>
                         <Slide>
                         <RubberBand><TopLine>{topLine}</TopLine></RubberBand>
                         <Jump><Heading lightText= {lightText}>{headline }</Heading></Jump>
                         <Subtitle darkText= {darkText}>{description}</Subtitle>
                         </Slide>
                         <BtnWrap>
                             <Button 
                             to='home'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                             primary={primary ? 1 : 0}
                             dark={dark ? 1 : 0}
                             dark2={dark2 ? 1 : 0 }
                             >{buttonLabel}</Button>
                         </BtnWrap>
                     </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Jump><Img src={img} alt={alt}  /></Jump>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        
    </>
  )
}

export default InfoSection