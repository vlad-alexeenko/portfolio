import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import ChrisPicture from '../pictures/ChrisPicture.jpg';
import AshleyPicture from '../pictures/AshleyPicture.jpeg';
import JamesPicture from '../pictures/JamesPicture.jpeg';

const recommendationsData = [
  {
    name: "Chris Lee",
    position: "Senior QA Engineer at Opportunity@Work",
    date: "May 15, 2023",
    picture: ChrisPicture,
    title: "Chris was senior to Vlad but didn't manage Vlad directly",
    description: [
      "I have had the pleasure of working with Vlad for six months at Opportunity@Work, where he demonstrated an exceptional ability to learn and adapt to new technologies. During his time with us, Vlad focused on automation primarily using Cypress, and he quickly became proficient in this area.",
      "Vlad is a quick learner who consistently seeks out new challenges and opportunities to improve his skills. He takes feedback well and is always eager to incorporate it into his work. Vlad's attention to detail and dedication to quality are evident in all of his work.",
      "As a team member, Vlad is collaborative, supportive, and always willing to lend a hand to his colleagues. His positive attitude and willingness to take on new responsibilities make him a valuable asset to any team.",
      "I highly recommend Vlad to anyone looking for a skilled and motivated professional who is committed to delivering high-quality work. He would be an excellent addition to any organization."
    ]
  },
  {
    name: "Ashley Van De Poel",
    position: "Software Engineer",
    date: "October 10, 2023",
    picture: AshleyPicture,
    title: "Ashley worked with Vlad on the same team",
    description: [
      "Vlad is a true unicorn. He's a passionate engineer with a contagious enthusiasm to learn and excel. He is thorough, well-organized, detail-orientated, and a great communicator.", 
      "He's an invaluable part of our QA process and has also shown amazing growth in web development. I have greatly enjoyed working alongside Vlad.",
    ]
  },
  {
    name: "James Black",
    position: "Sr. Product Manager",
    date: "October 1, 2023",
    picture: JamesPicture,
    title: "James worked with Vlad on the same team",
    description: [
        "Vlad is an impressive, dedicated, and invaluable part of the team at CodeNoise. He joined as QA and quickly transitioned to web development.", 
        "He is detailed, a quick learner, asks the right questions, and has terrific follow through."
    ]
  }
];

const Recommendations = () => {
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecommendationIndex((prevIndex) => (prevIndex + 1) % recommendationsData.length);
    }, 15000); // Change recommendation every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentRecommendationIndex(index);
  };

  const PictureClick = (e) => {
    e.preventDefault();
    const url = 'https://www.linkedin.com/in/valexeenko-info/';
    window.open(url, '_blank');
  };

  const { name, position, date, picture, title, description } = recommendationsData[currentRecommendationIndex];

  return (
    <MainBlock>
      <AboutMe>
        <Header>References:</Header>
        <Description>You can find those recommendations on my LinkedIn profile.</Description>
        <MainDiv>
          <ChrisImg src={picture} alt={`${name} picture`} onClick={PictureClick} />
          <Columns>
            <ChrisName onClick={PictureClick}>{name}</ChrisName>
            <Description1 onClick={PictureClick}>{position}</Description1>
            {/* change "was senior but didn't mannage" */}
            <Description2 onClick={PictureClick}>{date}, {title}</Description2>
            {description.map((text, index) => (
              <Text key={index}>{text}</Text>
            ))}
          </Columns>
        </MainDiv>
      </AboutMe>
      <DotsContainer>
        {recommendationsData.map((_, index) => (
          <Dot key={index} active={index === currentRecommendationIndex} onClick={() => handleDotClick(index)} />
        ))}
      </DotsContainer>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  margin-top: 55px;
`;

const Header = styled.span`
  color: ${colors.primaryColor};
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Description = styled.span`
  color: white;
  font-family: 'Poppins',sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px; /* 177.778% */
`;

const MainDiv = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ChrisImg = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 25px;
`;

const ChrisName = styled.a`
  color: white;
  font-family: 'Poppins',sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    color: #0a66c2;
  }
`;

const Description1 = styled.a`
  color: white;
  font-family: 'Poppins',sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
`;

const Description2 = styled.a`
  color: #666;
  font-family: 'Poppins',sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
`;

const Text = styled.span`
  color: white;
  font-family: 'Poppins',sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  cursor: auto;
  margin-top: 15px;
  text-align: justify;
`;

const DotsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? colors.primaryColor : "#ccc")};
  margin: 0 5px;
  cursor: pointer;
`;

export default Recommendations;
