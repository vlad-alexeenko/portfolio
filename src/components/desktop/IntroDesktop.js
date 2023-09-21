import React, { useState } from "react";
import { styled } from "styled-components";
import MyName from "../MyName";
import AboutMeButton from "../AboutMeButton";
import ProjectsButton from "../ProjectsButton";
import MyPicture from '../pictures/Slavynia.png';
import LinkedIn1 from '../pictures/linkedin1.png';
import LinkedIn2 from '../pictures/linkedin2.png';

function IntroDesktop() {
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const LinkedinClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };

    return(
        <div>
            <TextBlock>
                <Header>
                    <FirstParagraph>Hello, i'm</FirstParagraph>
                    <SecondParagraph><MyName/></SecondParagraph>
                    <Description>Software Engineer in Test. Champion of quality, finding issues before customers do!</Description>
                    <ButtonContainer>
                    <AboutMeButton scrollNumber={670} />
                    <ProjectsButton />
                    <Logo
                    src={isHovered ? LinkedIn2 : LinkedIn1}
                    alt="Linkedin image"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="#" onClick={LinkedinClick}
                    />
                    </ButtonContainer>
                </Header>
                <MyCircleImage src={MyPicture} alt="MyPicture" />
            </TextBlock>
        </div>
    )
}

const TextBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
`;

const Header = styled.div`
    display: inline-grid;
    max-width: 390px;
`;

const FirstParagraph = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    padding-bottom: 10px;
    margin: 0;
;`

const SecondParagraph = styled.span`

;`

const Description = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
    margin: 20px 0px 30px 0px;
    
;`

const MyCircleImage = styled.img`
    height: 370px;
    margin-left: 150px;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 387px;
    gap: 15px;
`;

const Logo = styled.img`
    height: 48px;
    width: 48px;
    cursor: pointer;
`;

export default IntroDesktop;