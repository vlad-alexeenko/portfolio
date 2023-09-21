import React from "react";
import { styled } from "styled-components";
import AboutMeButton from "../AboutMeButton";
import ProjectsButton from "../ProjectsButton";
import MyPicture from '../pictures/Slavynia.png';
import MyNameMobile from "./MyNameMobile";

function IntroMobile() {
    return(
        <div>
            <TextBlock>
                <MyCircleImage src={MyPicture} alt="MyPicture" />
                <Header>
                    <FirstParagraph>Hello, i'm</FirstParagraph>
                    <SecondParagraph><MyNameMobile/></SecondParagraph>
                    <Description>Software Engineer in Test. Champion of quality, finding issues before customers do!</Description>
                    <ButtonContainer>
                    <AboutMeButton scrollNumber={820} />
                    <ProjectsButton/>
                    </ButtonContainer>
                </Header>
            </TextBlock>
        </div>
    )
}

const TextBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.div`
    display: inline-grid;
`;

const FirstParagraph = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    padding-bottom: 10px;
    margin: 35px 0px 0px 15px;
;`

const SecondParagraph = styled.span`
    margin: 0px 0px 0px 15px;
;`

const Description = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
    margin: 10px 15px 10px 15px;
    
;`

const MyCircleImage = styled.img`
    height: 40vh;
    margin-top: 15vh;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 35px;
    justify-content: center;
    margin-top: 25px;
`;

export default IntroMobile;