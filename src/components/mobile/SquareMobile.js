import React from "react";
import styled from "styled-components";
import { colors } from "../colors";

function SquareMobile({ text, imageSrc, altText }) {
    
    return(
        <SquareBlock>
            <TextPosition>
                <Text>{text}</Text>
                <div>
                <Picture src={imageSrc} alt={altText} />
                </div>
            </TextPosition>
        </SquareBlock>
    )
}

const SquareBlock = styled.div`
    width: 170px;
    height: 168px;
    flex-shrink: 0; 
    background: ${colors.primaryColor};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
    cursor: pointer;
&: hover{
    box-shadow: 0 0 15px 5px #7562e0;
}
`;

const TextPosition = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin: 0px 0px 0px 14px;
`;

const Text = styled.span`
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    margin: 14px 0px 14px 0px;
`;

const Picture = styled.img`
    height: 50px;
`;

export default SquareMobile;