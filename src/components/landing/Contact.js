import React from "react";
import styled from "styled-components";

const BgOverlay = styled.div`
  background: linear-gradient(22deg, #45345a, #123baa);
  opacity: 0.9;
  position: bottom;
  height: 30%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  align: center;

  @media (min-width: 992px) {
    background-image: linear-gradient(62deg, #8400ff, #413bff);
  }
`;

const Contact = () => {
  return <BgOverlay id="contact">Contact</BgOverlay>;
};

export default Contact;
