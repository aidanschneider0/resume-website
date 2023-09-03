import React from 'react'
import styled from 'styled-components'
import victoria from '../assets/uofvic.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Top = styled.div`
    margin-left: 10px;
    margin-top: 80px;
    height: 30%;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
 `;

const Image = styled.img`
    width: 30vw;
`;

const Bot = styled.div`
    height: 70%;
    width: 65%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`;

const Left = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;    
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    width: 60%;
    text-align: center;
    text-decoration: underline crimson;
`;

const LineItem = styled.li`
    list-style-type: filled circle;
    margin: 10px;
`;

const Paragraph = styled.p`
    margin-bottom: 30px;
`;

const Block = styled.div`
    margin-left: 10px;
    width: 100%;
`;

const Home = () => {
  return (
    <Container id="Education">
        <Top>
            <Image src={victoria} />
            <Title> Education </Title>         
        </Top>
        <Bot>           
            <Left> 
                <Block>
                    <LineItem> Bachelor of Science in Mathematics and Statistics, <strong> GPA: 3.7 / 4.0 </strong>  - 
                        Relevant coursework: Linear Algebra, Data Structures and Algorithms, Probability Theory, Introductory Statistics I and II, and Vector Calculus </LineItem>
                    <Paragraph> I am a third year undergraduate student attending the University of Victoria, studying mathematics and statistics. 
                        Often I'm asked what I would like to do with my degree, and over the years my answer has morphed into a simple: "What can't I do with my degree?". 
                        The fact that my major is the backbone of many adjacent and interesting fields is what drew me in.
                        Some of my interests include economics, data science, and actuarial sciences. </Paragraph>    
                </Block>
                <Block>    
                    <LineItem> Completition of Actuarial Exam P - Probability, and Actuarial Exam FM - Financial Mathematics </LineItem>
                    <Paragraph> To build off of the paragraph above, one field that is of interest to me is the field of actuarial sciences.
                        To demonstrate my interest and competency of the material, I successfully wrote and passed exam P and exam FM - the two prelimiary actuarial exams. 
                        This acts as a testament for my desire to go beyond what is taught in my cirriculum and the ability to apply that material in domain specific areas (e.g., Insurance).
                        The first two exams are foundational for many different aspects of finance, economics, and data science, so I am proud to have completed them.
                        </Paragraph>   
                </Block>    
            </Left>
        </Bot>
    </Container>
  );
};

export default Home