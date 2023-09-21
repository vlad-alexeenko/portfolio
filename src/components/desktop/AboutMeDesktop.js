import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import Square from "../Square";
import RullerImg from '../pictures/ruler&pen.png';
import WebDev from '../pictures/code.png';
import MobileDev from '../pictures/android.png';
import APITesting from '../pictures/Code1.png';

const AboutMeDesktop = () => {
    
    const [year, setYear] = useState(4);

    function increase() {
       setYear(year+1);
    }
    return(
        <MainBlock>
            <AboutMe>
                <Header>About me:</Header>
                <Description>Hi, my name is Vlad Alexeenko, i am a software engineer in test, and frontend developer with experience in testing web and mobile applications. Here ara the major skills I have. </Description>
                <Flex>
                <Number onClick={increase}>{year}+</Number>
                <AboutText>Years of experience. Specialised in building and testing apps, while ensuring a seamless web experience for end users.</AboutText>
                </Flex>
                <Flex>
                <Square text="UI & UX TESTING" imageSrc={RullerImg} altText="Ruler Img" />
                <Square text="API TESTING" imageSrc={APITesting} altText="Ruler Img" />
                <Square text="WEB TESTING & DEVELOPMENT" imageSrc={WebDev} altText="Ruler Img" />
                <Square text="MOBILE TESTING & DEVELOPMENT" imageSrc={MobileDev} altText="Ruler Img" />
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
    width: 950px;
    margin-top: 55px;
`;

const Header = styled.span`
    color: ${colors.primaryColor};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const Description = styled.span`
    color: white;
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px; /* 177.778% */
`;

const Number = styled.span`
    color: ${colors.primaryColor};
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`;

const AboutText = styled.span`
    color: white;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 20px 0px 0px 5px;
`;

const Flex = styled.div`
    display: flex;
    gap: 17px;
`;

export default AboutMeDesktop;