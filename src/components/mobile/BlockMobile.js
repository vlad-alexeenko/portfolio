import React from "react";
import styled from "styled-components";

function BlockMobile({ text, text2, text3, imageSrc, altText }) {
    
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
                <Text2>{text3}</Text2>
            </SecondDiv>
        </SquareBlock>
    )
}

const SquareBlock = styled.div`
width: 170px;
flex-shrink: 0; 
border-radius: 16px;
border: 3px solid var(--Primary-colour, #7562E0);
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
&: hover{
    box-shadow: 0 0 15px 5px #7562e0;
}
`;


const Text = styled.span`
    color: #FFF;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    margin: 14px 0px 14px 0px;
    text-align: center;
`;

const Text2 = styled.li`
    color: #FFF;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal; 
    margin: 14px 5px 14px 15px;
    text-align: inherit;
`;

const Picture = styled.img`
    height: 50px;
`;

const TopDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20%;
`;

const SecondDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 5px 0px 5px;
`;

export default BlockMobile;