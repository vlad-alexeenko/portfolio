import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Text = styled.span`
color: white;
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  font-weight: 600;
  font-style: normal;
  cursor: auto;
`;

const TypingAnimationMobile = ({ text, period }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    const typeAnimation = (el, toRotate, period) => {
      const txtType = {
        toRotate,
        el,
        loopNum: 0,
        period: parseInt(period, 10) || 2000,
        txt: "",
        isDeleting: false,
      };

      const tick = () => {
        const i = txtType.loopNum % txtType.toRotate.length;
        const fullTxt = txtType.toRotate[i];

        if (txtType.isDeleting) {
          txtType.txt = fullTxt.substring(0, txtType.txt.length - 1);
        } else {
          txtType.txt = fullTxt.substring(0, txtType.txt.length + 1);
        }

        txtType.el.innerHTML = '<span class="wrap">' + txtType.txt + "</span>";

        let delta = 200 - Math.random() * 100;

        if (txtType.isDeleting) {
          delta /= 2;
        }

        if (!txtType.isDeleting && txtType.txt === fullTxt) {
          delta = txtType.period;
          txtType.isDeleting = true;
        } else if (txtType.isDeleting && txtType.txt === "") {
          txtType.isDeleting = false;
          txtType.loopNum++;
          delta = 500;
        }

        animationRef.current = setTimeout(() => {
          tick();
        }, delta);
      };

      tick();
    };

    const elements = document.getElementsByClassName("typewrite");

    for (let i = 0; i < elements.length; i++) {
      const toRotate = JSON.parse(elements[i].getAttribute("data-type"));
      const element = elements[i];
      if (toRotate) {
        typeAnimation(element, toRotate, period);
      }
    }

    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    return () => {
      // Clear the animation timer when the component unmounts
      clearTimeout(animationRef.current);
    };
  }, [period]);

  return (
    <Text
      className="typewrite"
      data-period={period}
      data-type={JSON.stringify(text)}
    >
      <span className="wrap"></span>
    </Text>
  );
};

export default TypingAnimationMobile;
