import React from 'react'
import styled from 'styled-components'
import bci from "../assets/bci.svg"
import kpmg from "../assets/kpmg.png"

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
`;

const Bot = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
`;

const BotLeft = styled.div`
    height: 100%;
    width: 50%;
    padding: 10px;
    text-align: left;
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    width: 60%;
    text-align: center;
    text-decoration: underline crimson;
`;

const BotRight = styled.div`
    height: 100%;
    width: 50%;
    padding: 10px;
    text-align: left; 
`;

const Image = styled.img`
    width: 15%;
    padding: 10px;
    vertical-align: top;
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


const WorkExperience = () => {
  return (
    <Container id='WorkExperience'> 
        <Top>         
             <Image src={kpmg}></Image>
             <Title> Work Experience </Title>
             <Image src={bci}></Image>    
        </Top> 
        <Bot>
            <BotLeft> <strong> Intern - KPMG, Technology Risk Consulting (TRC), Advisory Department: <div> September 2022 - December 2022 </div> </strong> 
            <Block> <Paragraph> <LineItem> Member of the Risk Advisory team involved in conducting thorough IT audits of public and private companies. </LineItem>
                    <LineItem> Demonstrated a working knowledge of the four IT layers (application, database, operating system, network) and 
                                how they contribute to a firm’s financial reporting system or could be involved in reporting errors. </LineItem>
                    <LineItem> Participated and engaged in client walkthroughs, this involved documenting and asking critical questions 
                                pertaining to the integrity of the IT systems under inspection. </LineItem>
                    <LineItem> Developed a well-rounded outlook of both the business and IT landscape by seeing strengths and weakness 
                                between different firms and participating in professional Audit and IT Audit courses. </LineItem> 
                    <LineItem> Worked in a professional and collaborative environment where client satisfaction, internal and external 
                                communication, attention to detail, and the ability to learn quickly is put on a pedestal. </LineItem> </Paragraph> </Block> 
            </BotLeft>

            <BotRight> <strong> Intern - BCI, Strategic Asset Allocation (SAA), Strategy and Risk Department: <div> January 2023 - April 2023 </div> </strong>
            <Block> <Paragraph> <LineItem> Member of the Strategic Asset Allocation team within the Investment Strategy and Risk department responsible 
                    for preserving client portfolio allocation benchmarks and monitoring KPIs (e.g., liquidity, alpha, beta, etc.). </LineItem>
                    <LineItem> Investigated actuarial valuation reports, and compiled economic data to determine how to advise our clients based 
                    on the impact to their portfolio positions as part of the Asset Liability Management process. </LineItem>
                    <LineItem> Worked in Excel and Power BI to develop models for communicating the findings clearly and concisely.
                    One project involved investigating historic discrepancies between OIS and the CDOR curves to try and forecast future credit premiums. </LineItem> 
                    <LineItem> Improved understanding of financial products and types of portfolio asset mix strategies. </LineItem> </Paragraph> </Block> 
            </BotRight>
            </Bot> 
    </Container>
  )
}

export default WorkExperience