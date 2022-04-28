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
    @media screen and (max-width : 480px){
        height: 1300px;
    }
`;

export const SolutionsWrapper= styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50 px;

    @media screen and (max-width : 1000px){
        grid-template-columns: 1fr 1fr ;
    }
    @media screen and (max-width : 1000px){
        grid-template-columns: 1fr  ;
    }
    @media screen and (max-width : 768px){
        grid-template-columns: 1fr 1fr ;
        padding: 0 20px;
    }

`;


export const SolutionsCard= styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
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

export const SolutionsIcon= styled.img`
    height: 50px;
    width: 80px;
    margin-bottom: 10px;
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
    font-size: 1rem;
    margin-bottom: 10px;
    justify-content: center
`;



