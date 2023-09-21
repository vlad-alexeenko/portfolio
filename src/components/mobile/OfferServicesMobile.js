import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import RullerImg from '../pictures/ruler&pen.png';
import WebDev from '../pictures/code.png';
import MobileDev from '../pictures/android.png';
import Git from '../pictures/git-repo.png';
import JS from '../pictures/javascript.png';
import Remote from '../pictures/remote.png';
import BlockMobile from "./BlockMobile";


const OfferServicesMobile = () => {
    
    return(
        <MainBlock>
            <AboutMe>
                <Header>The services i offer:</Header>
                <Flex>
                <BlockMobile text="UI & UX TESTING" text2="Functional, Integration, Perfomance testing for every new ticket. Updating test documentation and test plans." text3="Automation regression (Cypress.io & JS, Webdriver.io & JS, Appium & JS)." imageSrc={RullerImg} altText="Ruler Img" />
                <BlockMobile text="WEB DEVELOPMENT" text2="Frontend development using React (JS/TS) and Rails (JS/Ruby)." text3="Understanding the development methodologies and testing strategies." imageSrc={WebDev} altText="Ruler Img" />
                </Flex>
                <Flex>
                <BlockMobile text="MOBILE TESTING & DEVELOPMENT" text2="Frontend development using React Native (JS/TS)." text3="Development of an automation test suites (Appium & JavaScript with Node. js)." imageSrc={MobileDev} altText="Ruler Img" />
                <BlockMobile text="VERSION CONTROL" text2="I can use version control systems well." text3="Tools: github & bitbucket." imageSrc={Git} altText="Version Control System" />
                </Flex>
                <Flex>
                <BlockMobile text="UNIT TESTING" text2="Familiarity with the test-driven development process." text3="Tools: RSpec (Ruby), Jest/React Testing Library (JS)" imageSrc={JS} altText="JS" />
                <BlockMobile text="API TESTING" text2="Creation and maintenance of Postman collections (with pre-request scripts and tests)." text3="Working with API documentation and creating automation API tests (Postman/Cypress.io & JS)." imageSrc={Remote} altText="Remote image" />
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
`;

const Flex = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
    justify-content: center;
`;

export default OfferServicesMobile;