import React from "react";
import styled from "styled-components";
import userImage from './pictures/userImage.png';
import { colors } from "./colors";

const AboutMeButton = ({scrollNumber}) => {
    return(
        <ButtonComponent onClick={() => window.scrollTo({top: scrollNumber, behavior: 'smooth'})}>
            About me
            <UserImage src={userImage} alt="User" />
        </ButtonComponent>
    )
}

const ButtonComponent = styled.button`
    display: inline-flex;
    padding: 12px 15px;
    gap: 6px; 
    border-radius: 8px;
    background: ${colors.primaryColor};

    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    width: 150px;
    height: 48px;
    cursor: pointer;
    border: none;
    align-items: center;
    justify-content: center;
    &: hover{
        border: 2px solid ${colors.primaryColor}; 
        background: ${colors.primaryBackground};
    }
`;

const UserImage = styled.img`
    height: 25px;
`;

export default AboutMeButton;