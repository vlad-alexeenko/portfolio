import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import TypingAnimationMobile from "./TypingAnimationMobile";


function MyNameMobile() {
    return(
        <div>
            <TypingAnimationMobile 
            text={["Vlad Alexeenko"]}
            period={2000}
            />
        <Outlet/>
        </div>
    )
}

const Text = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: white;
    margin: 0;
`;

export default MyNameMobile;