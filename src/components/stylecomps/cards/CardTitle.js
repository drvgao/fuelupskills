import React from "react";
import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 1px;
`;

const CardTitle = ({ children, color = "#ff867c" }) => (
  <Title>{children}</Title>
);

export default CardTitle;
