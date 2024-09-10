import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import Project from "../Project";
import Stellarworx from "../pictures/Stellarworx.png";
import Cubionic from "../pictures/Cubionic.png";
import MyTablo from "../pictures/MyTablo.png";


const FeaturedProjectsMobile = () => {
    
    return(
        <MainBlock>
            <AboutMe>
                <Header>Featured projects:</Header>
                <Description>I have worked on many projects while being a Software Engineer in Test, here are a few of my live, real-world projects:</Description>
                <Flex>
                <Project text="Sharp HealthCare" text2="Functional testing. Smoke, Regression and API testing (Cypress & TS). I automated DCT manual test cases, including critical test scenarios, and implemented modern design patterns in testing." link="https://www.sharp.com/" imageSrc={MyTablo} altText="Sharp HealthCare logo"/>    
                <Project text="Opportunity@Work" text2="Functional, Integration and Regression testing for every new ticket (Cypress & JS). I brought and implemented great standards of test plans and reports for regression testing coverage for that project." link="https://www.stellarworx.org/" imageSrc={Stellarworx} altText="Stellarworx logo"/>
                <Project text="Cubionic" text2="Frontend development (React & TS), API testing, Functional and Smoke testing. On that project, I created a Postman collection for API automation testing & interaction. Performed frontend development tasks." link="https://cubionic.com/" imageSrc={Cubionic} altText="Stellarworx logo"/>
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
  line-height: 20px;
  margin: 0px 15px 0px 15px;
  text-align: justify;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 15px;
    align-items: center;
`;

export default FeaturedProjectsMobile;