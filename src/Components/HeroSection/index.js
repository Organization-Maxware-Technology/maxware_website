import React, {useState} from 'react'
import Jump from 'react-reveal/Jump';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Transforming your digital presence
            </HeroH1>
            <HeroP><Jump>
            Maxware is a professional training center in 
            Kenitra. We offer professional training for students
            and employees of the industry. We accompany you in
            training courses that meet the needs of the Moroccan 
            market and mainly the Free Zone. Our qualities are
            expert trainers, motivating and concrete trainings, 
            the practice is in the center of our teaching methods. In addition, we offer quality
            training for computer scientists and doctoral students.</Jump>
            </HeroP>
            <HeroBtnWrapper>
                <Button to='solutions' 
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
                Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection ;