import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import LinkedIn1 from '../pictures/linkedin1.png';
import LinkedIn2 from '../pictures/linkedin2.png';
import Telegram1 from '../pictures/telegram1.png';
import Telegram2 from '../pictures/telegram2.png';

function FooterDesktop() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredTelegram, setIsHoveredTelegram] = useState(false);
    const Year = new Date().getFullYear();

    const LinkedinClick = (e) => {
        e.preventDefault();
        const url = 'https://www.linkedin.com/in/valexeenko-info/';
        window.open(url, '_blank');
      };

    const TelegramClick = (e) => {
        e.preventDefault();
        const url = 'https://t.me/valexeenko/';
        window.open(url, '_blank');
    };

    const handleMouseEnter = () => {
    setIsHovered(true);
  };

    const handleMouseLeave = () => {
    setIsHovered(false);
  };

    const handleMouseEnter1 = () => {
        setIsHoveredTelegram(true);
    };

        const handleMouseLeave1 = () => {
            setIsHoveredTelegram(false);
    };
  

    return(
        <MainBlock>
            <LeftPart>
                <WhiteText>©{Year} Connect with me:</WhiteText>
                <Logo
                    src={isHovered ? LinkedIn2 : LinkedIn1}
                    alt="Linkedin image"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="#" onClick={LinkedinClick}
                />
                <Logo
                    src={isHoveredTelegram ? Telegram1 : Telegram2}
                    alt="Telegram image"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    href="#" onClick={TelegramClick}
                />
            </LeftPart>
            <RightPart>
            <WhiteText>I designed it myself in San Diego, CA</WhiteText>
            </RightPart>
        </MainBlock>
    )
}

const MainBlock= styled.div`
  display: inline-flex;
  padding: 19px 0px;
  align-items: flex-start;
  width: 100%;
  height: 62px;
  background: ${colors.headerColor};
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

const LeftPart = styled.div`
    display: flex;
    margin-left: 25px;
    gap: 10px;
`;

const WhiteText = styled.span`
  color: white;
  font-family: 'Poppins',sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
`;

const RightPart = styled.div`
    display: flex;
    margin-right: 25px;
    gap: 10px;
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer;
`;

export default FooterDesktop;