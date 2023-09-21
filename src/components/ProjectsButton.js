import React from "react";
import styled from "styled-components";
import eyeImage from './pictures/eye.png';
import { colors } from "./colors";

const ProjectsButton = () => {

    const ResumeClick = (e) => {
        e.preventDefault();
        const url = 'https://drive.google.com/file/d/1nN0XOz-vprEBt5vjfc96x1twIWWz7nJX/view?usp=sharing';
        window.open(url, '_blank');
      };

    return(
        <ButtonComponent href="#" onClick={ResumeClick}>
            Resume
            <UserImage src={eyeImage} alt="User" />
        </ButtonComponent>
    )
}

const ButtonComponent = styled.button`
    display: inline-flex;
    padding: 12px 15px;
    gap: 6px; 
    border-radius: 8px;
    background: ${colors.primaryBackground};

    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    width: 150px;
    height: 48px;
    cursor: pointer;
    border: 2px solid ${colors.primaryColor}; 
    align-items: center;
    justify-content: center;

    &: hover{
        border: 2px solid var(--Primary-colour, #7562E0); 
        background: ${colors.primaryColor};
    }
`;

const UserImage = styled.img`
    height: 25px;
`;

export default ProjectsButton;