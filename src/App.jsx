import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import ExtraCurricular from "./components/ExtraCurricular";
import Contact from "./components/Contact";

// components allow for css styling in a <> tag
// app.jsx takes into account all the other components written

const Container = styled.div`     
    display: flex;
    flex-direction: column;
`;

// design for the layered effect seen on the landing page 

const IntroShape = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
    background-color: #907968;
`;

// design for the layered effect seen on education page on the website

const LayerOne = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: calc(100vh - 15px);
    left: 0vw;
    z-index: -1;
    clip-path: polygon(90% 0%, 100% 0%, 100% 100%, 95% 100%);
    background-color: #0055ff;
`;

const LayerTwo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: calc(100vh - 15px);
    left: 0vw;
    z-index: -2;
    clip-path: polygon(85% 0%, 100% 0%, 100% 100%, 90% 100%);;
    background-color: #171539 ;
`;

const LayerThree = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: calc(100vh - 15px);
    left: 0vw;
    z-index: -3;
    clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 87% 100%);
    background-color: #ff2f00;
`;

const LayerFour = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: calc(100vh - 15px);
    left: 0vw;
    z-index: -4;
    clip-path: polygon(75% 0%, 100% 0%, 100% 100%, 80% 100%);
    background-color:#ffa600c5;
`;

const App = () => {
    return <Container> 
            <Navbar /> 
            <IntroShape id='Home'/> 
            <Intro /> 
            <LayerOne /> 
            <LayerTwo /> 
            <LayerThree /> 
            <LayerFour /> 
            <Education /> 
            <WorkExperience /> 
            <ExtraCurricular />
            <Contact />
        </Container> 
};

export default App;