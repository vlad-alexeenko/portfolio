import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import TypingAnimation from "./TypingAnimation";


function MyName() {
    return(
        <div>
            <TypingAnimation 
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

export default MyName;