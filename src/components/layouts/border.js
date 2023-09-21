import React from "react";
import styled from "styled-components";
import { colors } from "../colors";

const Border = () => {
    return(
        <PirpleBlock/>
    )
}

const PirpleBlock = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background: ${colors.headerColor};
`;

export default Border;