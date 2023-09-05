import React from 'react'
import styled from 'styled-components'

// design for the contact page on the website

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
    padding-top: 100px;
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

const Paragraph = styled.p`
    margin-bottom: 30px;
`;

const Contact = () => {
    return (
      <Container id='Contact'> 
      <Top> <Subtitles> Thank you for visiting my website! </Subtitles> 
      </Top>
      <Bot> 
        <Centre> 
            <Paragraph> You can find the source code for this website here: <a href='https://github.com/aidanschneider0'> https://github.com/aidanschneider0. </a> Feel free to use this as a foundation for your own resume website. </Paragraph>
                        I'm always looking to connect with other individuals in the industries I've shown interest in, no matter the experience level. 
                        I enjoy talking about books (with my favourite author currently being Michael Lewis), the Toronto Blue Jays or baseball in general, and much more!
        </Centre>
      </Bot>
      </Container>
    )
  }

export default Contact;