import styled from 'styled-components'

export const SolutionsContainer= styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

        @media screen and (max-width : 768px){
            height: 1100px;
        }
    
 `;

export const SolutionsWrapper= styled.div`
     max-width: 900px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr ;
     align-items: center;
     grid-gap: 16px;
     padding: 0 50px;

     @media screen and (max-width : 1000px){
         grid-template-columns: 1fr 1fr ;
     }
     @media screen and (max-width : 1000px){
         grid-template-columns: 1fr  ;
     }
   

 `;

export const SolutionsCard= styled.div`
     background: #FFF;
     display: flex;
     flex-direction: column;
     justify-content:center;
     align-items:center;
     border-radius: 10px;
     max-height: 340px;
     padding: 10px;
     box-shadow: 0 1px 3px rgba(0,0,0,0.2);
     transition: all 0.2s ease-in-out;

     &:hover{
         transform: scale(1.02);
         color:#ff725e;
         transition: all 0.2s ease-in-out;
         cursor: pointer;
     }

 `;


export const SolutionH1= styled.h1`
     font-size: 2.5rem;
     color: #FFF;
     margin-bottom: 64px;
    
     @media screen and (max-width: 480px){
         font-size:2rem
     }
 `;

export const SolutionH2= styled.h2`
     font-size: 0.7rem;
     margin-bottom: 16px;
     justify-content: center;
 `;




