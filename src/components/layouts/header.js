import React from "react";
import { styled } from "styled-components";
import { colors } from "../colors";

function Header() {

    const LinkedinClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };

    return(
        <div>
            <HeaderLayout>
                <div>
                <Logo>Vlad Alexeenko</Logo>
                </div>
                <RightPart>
                <Paragraph onClick={() => window.scrollTo({top: "0", behavior: 'smooth'})}>Home</Paragraph>
                <Paragraph onClick={() => window.scrollTo({top: "670", behavior: 'smooth'})}>About me</Paragraph>
                <Paragraph onClick={() => window.scrollTo({top: "1920", behavior: 'smooth'})}>Projects</Paragraph>
                <Paragraph href="#" onClick={LinkedinClick}>Contact me</Paragraph>
                </RightPart>
            </HeaderLayout>
        </div>
    )
}

const HeaderLayout = styled.div`
    display: inline-flex;
    padding: 19px 0px;
    align-items: flex-start;
    width: 100%;
    height: 42px;
    background: ${colors.headerColor}; 
    align-items: center;
    justify-content: space-between;
`;

const RightPart = styled.div`
    display: inline-flex;
    align-items: flex-start;
    gap: 40px;
    padding-right: 160px;
`;

const Logo = styled.p`
    color: ${colors.primaryColor};
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
    margin: 0;
    padding-left: 160px;
`;

const Paragraph = styled.p`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
    margin: 0;
    cursor: pointer;
    border-bottom: 1px solid white;
    &: hover{
        border-bottom: 1px solid ${colors.primaryColor};
    }
`;

export default Header;