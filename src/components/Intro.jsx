import React from 'react'
import { styled } from 'styled-components'
import AnimatedShapes from './AnimatedShapes';
import TypeWriter from './TypeWriter';

const Container = styled.div`
    height: calc(100vh - 65px);
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    width: 70%;
    padding: 25px;
`;

const Title = styled.h1`
    width: 80%;
    font-size: 50px;
`;

const Desc = styled.p`
    width: 80%;
    font-size: 20px;
`;

const Info = styled.div`
    width: 60%;
    display: flex;
`;

const Right = styled.div`
    width: 30%;    
`;

const Intro = () => {
  return (
    <Container>
        <Left> <Title> Welcome to my Interactive Resume </Title>
            <Desc> <TypeWriter /> </Desc>
            <Info> 
            </Info> 
        </Left>
        <Right> </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro