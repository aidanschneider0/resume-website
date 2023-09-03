import React from 'react'
import styled from 'styled-components'
import iesvic from '../assets/iesvic_uvic_logo.jpg'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
`;

const Subtitles = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding-top: 50px;
`;

const Bot = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
`;

const Centre = styled.div`
    height: 100%;
    width: 100%;
    padding: 25px;
`;

const Image = styled.img`
    width: 45%;
    padding: 10px;
    vertical-align: top;
`;

const Paragraph = styled.p`
    margin-bottom: 30px;
`;

const LineItem = styled.li`
    list-style-type: filled circle;
    margin: 10px;
`;

const ExtraCurricular = () => {
  return (
    <Container id='ExtraCurricular'> 
        <Top> 
            <Subtitles> Projects </Subtitles>
        </Top>
        <Bot>
            
            <Centre> <Image src={iesvic}></Image> 
            <Paragraph> Recently in August, I started supporting a Civil Engineering PhD student with her research in Canadian energy systems modelling. Some of my responsibilities include: 
                <LineItem> Performed exploratory data analysis on a data set based on solutions to an economic optimization problem pertaining to Canada’s sustainable energy space </LineItem> 
                <LineItem> Investigated input-to-output and output-to-output correlations and data distributions among the output results, created visuals using Python </LineItem> 
                <LineItem> Involved in data preprocessing using NumPy for machine learning surrogate models with the goal of creating more efficient models relative to the computationally heavy model that provided our initial results </LineItem> 
                This opportunity has enabled me to get my feet wet within the world of research,  learn the process of idea generation with regards to an open-ended problem, and develop software in a team setting using version control tools. Check back for more updates! 
                </Paragraph> </Centre>
        </Bot>
    </Container>
  )
}

export default ExtraCurricular