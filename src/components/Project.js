import React from "react";
import styled from "styled-components";
import { colors } from "./colors";

function Project({ text, text2, link, imageSrc, altText }) {

    const Click = (e) => {
        e.preventDefault();
        const url = link;
        window.open(url, '_blank');
      };
    
    return(
        <SquareBlock>
                <TopDiv>
                <Picture src={imageSrc} alt={altText} />
                </TopDiv>
            <SecondDiv>
                <Text>{text}</Text>
            </SecondDiv>
            <SecondDiv>
                <Text2>{text2}</Text2>
            </SecondDiv>
            <SecondDiv>
            <Button href="#" onClick={Click}>View Live</Button>
            </SecondDiv>
        </SquareBlock>
    )
}

const SquareBlock = styled.div`
width: 307px;
height: 417px;
flex-shrink: 0;
border-radius: 8px;
background: #31313F;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
&: hover{
    box-shadow: 0 0 15px 5px #7562e0;
}
`;


const Text = styled.span`
    color: ${colors.primaryColor};
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    margin: 14px 0px 0px 0px;
    text-align: center;
`;

const Text2 = styled.span`
    color: #FFF;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal; 
    margin: 14px 0px 14px 0px;
    text-align: justify;
`;

const Picture = styled.img`
    height: 153px;
`;

const TopDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

const SecondDiv = styled.div`
    display: flex;
    width: 90%;
    padding: 0px 15px 0px 15px;
`;

const Button = styled.button`
    display: flex;
    width: 145px;
    height: 43px;
    padding: 12px 25px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    border-radius: 8px;
    background: ${colors.primaryColor};
    border: none;
    cursor: pointer;
    color: white;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    &: hover{
        border: 2px solid ${colors.primaryColor}; 
        background: ${colors.primaryBackground};
    }
`;

export default Project;