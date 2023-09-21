import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import ChrisPicture from '../pictures/ChrisPicture.jpg';


const RecommendationsMobile = () => {
    const PictureClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };
    
    return(
        <MainBlock>
            <AboutMe>
                <Header>References:</Header>
                <Description>You can find those recommendations on my LinkedIn profile.</Description>
                <MainDiv>
                    <ChrisImg 
                    src={ChrisPicture}
                    alt="Chris picture"
                    href="#" onClick={PictureClick}
                    />
                    <Columns>
                        <ChrisName href="#" onClick={PictureClick}>Chris Lee</ChrisName>
                        <Description1 href="#" onClick={PictureClick}>Senior QA Engineer at Opportunity@Work</Description1>
                        <Description2 href="#" onClick={PictureClick}>May 15, 2023, Chris was senior to Vlad but didn't manage Vlad directly</Description2>
                        <Text>I have had the pleasure of working with Vlad for six months at Opportunity@Work, where he demonstrated an exceptional ability to learn and adapt to new technologies. During his time with us, Vlad focused on automation primarily using Cypress, and he quickly became proficient in this area.</Text>
                        <Text>Vlad is a quick learner who consistently seeks out new challenges and opportunities to improve his skills. He takes feedback well and is always eager to incorporate it into his work. Vlad's attention to detail and dedication to quality are evident in all of his work.</Text>
                        <Text>As a team member, Vlad is collaborative, supportive, and always willing to lend a hand to his colleagues. His positive attitude and willingness to take on new responsibilities make him a valuable asset to any team.</Text>
                        <Text>I highly recommend Vlad to anyone looking for a skilled and motivated professional who is committed to delivering high-quality work. He would be an excellent addition to any organization.</Text>
                    </Columns>
                </MainDiv>
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
    margin: 55px 15px 5px 15px;
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

const MainDiv = styled.div`
    display: flex;
    margin-top: 15px;
`;

const Columns = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

const ChrisImg = styled.img`
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 25px;
`;

const ChrisName = styled.a`
    color: white;
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    &: hover{
        color: #0a66c2;
    }
`;

const Description1 = styled.a`
    color: white;
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
`;

const Description2 = styled.a`
    color: #666;
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
`;

const Text = styled.span`
    color: white;
    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    cursor: auto;
    margin-top: 15px;
    text-align: justify;
`;

export default RecommendationsMobile;