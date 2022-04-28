import React from 'react'
import Jump from 'react-reveal/Jump'
import RubberBand from 'react-reveal/RubberBand';
import {FaHome ,FaCar, FaRegChartBar ,FaChartArea, FaMapSigns, FaRegSun} from 'react-icons/fa'
import { SolutionsContainer,
        SolutionH1,
        SolutionsWrapper,
        SolutionsCard,
        SolutionH2,
        
        } from './SolutionsElements'

const Solutions = () => {
  return (
    <SolutionsContainer id="solutions">
        <Jump><SolutionH1>Our Solutions</SolutionH1></Jump>
        <SolutionsWrapper>
            <RubberBand>
            <SolutionsCard>  
                <FaRegChartBar/>  
                <SolutionH2><u>Commercial management</u> </SolutionH2>  
            </SolutionsCard>
            <SolutionsCard>
                <FaChartArea/>
                <SolutionH2><u>Business management</u> </SolutionH2>
               
            </SolutionsCard>
            <SolutionsCard>
                <FaHome/>
                <SolutionH2><u>Management of a tiling company</u> </SolutionH2>
                
            </SolutionsCard>
            <SolutionsCard>
                
                <FaMapSigns/>
                <SolutionH2><u>Production management</u> </SolutionH2>
                
            </SolutionsCard>
            <SolutionsCard>
                <FaRegSun/>
                <SolutionH2><u>Geolocation</u> </SolutionH2>
                
            </SolutionsCard>
            <SolutionsCard>
                <FaCar/>
                <SolutionH2><u>Vehicle rental 
                management</u> </SolutionH2>
                
            </SolutionsCard>
            </RubberBand>
        </SolutionsWrapper>
    </SolutionsContainer>
  )
}

export default Solutions