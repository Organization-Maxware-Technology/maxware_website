import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const ServicesContainer= styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    
    @media screen and (max-width : 768px){
        height: 1000px;
    }
    @media screen and (max-width : 480px){
        height: 1300px;
    }
`;

export const ServicesWrapper= styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 10px;

    @media screen and (max-width : 1000px){
        grid-template-columns: 1fr  ;
    }
    @media screen and (max-width : 768px){
        grid-template-columns: 1fr ;
        padding: 0 20px;
    }
    @media screen and (max-width : 768px){
        grid-template-columns: 1fr ;
        padding: 0 30px;
    }
    @media screen and (max-width : 768px){
        grid-template-columns: 1fr;
        padding: 0 6px;
    }
    @media screen and (min-width: 720px) and (max-width:2000px){
        grid-template-columns:repeat(2, 1fr);
    }
    

`;


export const ServicesCard= styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    border-radius: 10px;
    max-height: 390px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`;

export const ServicesIcon= styled.img`
    height: 90px;
    width: 100px;
    margin-bottom: 8px;
`;

export const ServicesH1= styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 43px;
    
    @media screen and (max-width: 480px){
        font-size:2rem;
    }
`;

export const ServicesH2= styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP= styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const SerBtnWrapper= styled.div`
    margin-top: 17px;
    display:flex;
    flex-direction: column;
    align-items: center;
    

`;

export const ArrowForward= styled(MdArrowForward)`
    margin-top: 5px;
    font-size:15px;
    color:#FF725E;
    justify-content:center;


`;

export const ArrowRight= styled(MdKeyboardArrowRight)`
    margin-top: 2px;
    font-size:15px;
    color:#FF725E;
    justify-content:center;

`;