import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import Project from "../Project";
import Stellarworx from "../pictures/Stellarworx.png";
import Cubionic from "../pictures/Cubionic.png";
import MyTablo from "../pictures/MyTablo.png";


const FeaturedProjects = () => {
    
    return(
        <MainBlock>
            <AboutMe>
                <Header>Featured projects:</Header>
                <Description>I have worked on many projects while being a Software Engineer in Test, here are a few of my live, real-world projects:</Description>
                <Flex>
                <Project text="Opportunity@Work" text2="Functional, Integration and Regression testing for every new ticket (Cypress.io & JS). I brought and implemented great standards of test plans and reports for regression testing coverage for that project." link="https://www.stellarworx.org/" imageSrc={Stellarworx} altText="Stellarworx logo"/>
                <Project text="Cubionic" text2="Frontend development (React & TS), API testing, Functional and Smoke testing. On that project, I created a Postman collection for API automation testing & interaction. Performed frontend development tasks." link="https://cubionic.com/" imageSrc={Cubionic} altText="Stellarworx logo"/>
                <Project text="My Tablo" text2="Functional, API testing. Smoke and Regression testing (Appium & JS). I used my knowledge of equivalence classes for regression coverage that helped us save time and money with the same high level of quality." link="https://www.outsetmedical.com/" imageSrc={MyTablo} altText="Stellarworx logo"/>
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

const Flex = styled.div`
    display: flex;
    gap: 17px;
    margin-top: 15px;
`;

export default FeaturedProjects;