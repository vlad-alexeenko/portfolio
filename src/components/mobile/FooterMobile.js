import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import LinkedIn1 from '../pictures/linkedin1.png';
import Telegram2 from '../pictures/telegram2.png';

function FooterMobile() {
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

    return(
        <MainBlock>

                <WhiteText>©{Year} Connect with me:</WhiteText>
                <GapBlock>
                <Logo src={LinkedIn1} alt="Linkedin image" href="#" onClick={LinkedinClick} />
                <Logo src={Telegram2} alt="Telegram image" href="#" onClick={TelegramClick} />
                </GapBlock>
            <WhiteText>I designed it myself in San Diego, CA</WhiteText>

        </MainBlock>
    )
}

const MainBlock= styled.div`
  display: flex;
  flex-direction: column;
  padding: 19px 0px;
  width: 100%;
  height: 72px;
  background: ${colors.headerColor};
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

const WhiteText = styled.span`
  color: white;
  font-family: 'Poppins',sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
`;

const Logo = styled.img`
    height: 40px;
    width: 40px;
    cursor: pointer;
`;

const GapBlock = styled.div`
    display: flex;
    gap: 10px; 
`

export default FooterMobile;