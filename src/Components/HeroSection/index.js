import React, {useState} from 'react'
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted scr={Video} type="video/mp4"/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Transforming your digital presence</HeroH1>
            <HeroP>
            Maxware is a professional training center in 
            Kenitra. We offer professional training for students
            and employees of the industry. We accompany you in
            training courses that meet the needs of the Moroccan 
            market and mainly the Free Zone. Our qualities are
            expert trainers, motivating and concrete trainings, 
            the practice is in the center of our teaching methods. In addition, we offer quality
            training for computer scientists and doctoral students.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='contactUs' 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                 >
                Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection ;