import React from "react";
import styled from "styled-components";

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #ec7b11;
    opacity: 0.7;
    position: absolute;
    z-index: -2;
    animation: square 20s linear infinite;

@keyframes square {
    0% {top: 0vh; left: 40vw;}
    50% {top: calc(100vh - 70px); Left: calc(55vw - 60px);}
    75% {top: 50vh; left: 0vw;}
    100% {top: 0vh; left: 40vw;}
}
`;

const Rect = styled.div`
    width: 60px;
    height: 100px;
    background-color: #4aba4a;
    opacity: 0.7;
    position: absolute;
    z-index: -2;
    animation: rect 25s linear alternate infinite;

@keyframes rect {
    0% {top: 40vh; left: 0px;}
    33% {top: 0vh; left: calc(67vw - 60px);}
    66% {top: calc(100vh - 110px); left: 27vw}
    100% {top: 0vh; left: 0vw;}
}
`;

const Circle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #3815c6;
    opacity: 0.7;
    position: absolute;
    z-index: -2;
    animation: circle 20s linear alternate infinite;

    @keyframes circle {
        0% {top: calc(100vh - 90px); left: 0vw;}
        50% {top: 0vh; left: 25vw;}
        100% {top: calc(100vh - 90px); Left: calc(55vw - 80px);}
}
`;

const AnimatedShapes = () => {
  return (
    <>
    <Square />
    <Circle />
    <Rect />
    </>
  )
}

export default AnimatedShapes