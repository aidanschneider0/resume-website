import React from 'react'
import styled from "styled-components"
import linkedIn from '../assets/linkedIn.png';
import github from '../assets/github.png';
import email from '../assets/emailIcon.png'

// design for the navigation bar on the website, includes icons, hover effects, and sticky effect when scrolling

const Container = styled.div`
  height: 75px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;  
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  &:hover {
    color: black;
  }
`;

const Navbar = () => { //this is what this code file exports, styled with components
  return (
    <Container>    
        <Wrapper>
           <Left> 
              <Menu>
                <MenuItem> <a href="#Home"> Home </a> </MenuItem>
                <MenuItem> <a href="#Education"> Education </a>  </MenuItem>
                <MenuItem> <a href="#WorkExperience"> Work Experience </a> </MenuItem>
                <MenuItem> <a href="#ExtraCurricular"> Extra Cirricular </a> </MenuItem>
                <MenuItem> <a href="#Contact"> Contact </a> </MenuItem>
              </Menu>
          </Left>
          <Right>
            <a href= "https://www.linkedin.com/in/aidan-schneider0"> <img src={linkedIn} width={50} height={50} style={{marginLeft: 20}} /> </a>   
            <a href="https://github.com/aidanschneider0"> <img src={github} width={50} height={50} style={{marginLeft: 20}} /> </a>
            <a href="mailto:aidanschneider@telus.net"> <img src={email} width={50} height={50} style={{marginLeft: 20}} /> </a> 
          </Right>             
        </Wrapper> 
    </Container>
  )
}

export default Navbar