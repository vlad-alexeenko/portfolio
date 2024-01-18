import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import RullerImg from '../pictures/ruler&pen.png';
import WebDev from '../pictures/code.png';
import MobileDev from '../pictures/android.png';
import APITesting from '../pictures/Code1.png';
import SquareMobile from "./SquareMobile";

const AboutMeMobile = () => {
    
    const [year, setYear] = useState(5);

    function increase() {
       setYear(year+1);
    }
    return(
        <MainBlock>
            <AboutMe>
                <Header>About me:</Header>
                <Description>Hi, my name is Vlad Alexeenko, i am a software engineer in test, and frontend developer with experience in testing web and mobile applications. Here ara the major skills I have. </Description>
                <Number onClick={increase}>{year}+</Number>
                <Description>Years of experience. Specialised in building and testing apps, while ensuring a seamless web experience for end users.</Description>
                <Flex>
                <OneBlock>
                <SquareMobile text="UI & UX DESIGNING" imageSrc={RullerImg} altText="Ruler Img" />
                <SquareMobile text="API TESTING" imageSrc={APITesting} altText="Ruler Img" />
                </OneBlock>
                <OneBlock>
                <SquareMobile text="WEB TESTING & DEVELOPMENT" imageSrc={WebDev} altText="Ruler Img" />
                <SquareMobile text="MOBILE TESTING & DEVELOPMENT" imageSrc={MobileDev} altText="Ruler Img" />
                </OneBlock>
                </Flex>
            </AboutMe>
        </MainBlock>
    )
}

const MainBlock = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    width: 100%;
`;

const Header = styled.span`
    color: ${colors.primaryColor};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 15px;
`;

const Description = styled.span`
    color: white;
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px; /* 177.778% */
    margin: 0px 15px 0px 15px;
    text-align: justify;

`;

const Number = styled.span`
    color: ${colors.primaryColor};
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px 0px 15px 0px;
`;

const OneBlock = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

export default AboutMeMobile;