import styled, { css } from "styled-components";

export const Card = styled.figure`
  margin: 20px;
  width: 180px;
  height: 270px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 3px rgba(0, 0, 0, 0.6);
    transform: translateY(-3px) scale(1.05) rotateX(15deg);
  }

  &:active:after,
  &:focus:after {
    transform: rotate(25deg);
    top: -40%;
    opacity: 0.15;
  }

  &:after {
    content: "";
    z-index: 10;
    width: 200%;
    height: 100%;
    top: -90%;
    left: -20px;
    opacity: 0.1;
    transform: rotate(45deg);
    background: linear-gradient(
      to top,
      transparent,
      #fff 15%,
      rgba(255, 255, 255, 0.5)
    );
    transition: 0.3s;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  min-height: 100%;
`;

export const CardFigCaption = styled.figcaption`
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  padding-bottom: 10px;
  font-size: 20px;
  background: none;
  color: #fff;
  transform: translateY(100%);
  transition: 0.3s;
`;

export const CardJob = styled.p`
  align-self: center;
  justify-self: center;
  display: inline-block;
  font-size: 7;
  font-weight: 8;
  text-align: center;
  letter-spacing: 0.25rem;
  /* color: rgba(100, 120, 200, 0.45); */
  transition: all var(--speed) ease;

  &:hover {
    color: rgba(100, 130, 200, 1);
  }
`;

export const CardBody = styled.div`
  display: grid;
  padding: 0 20px;
`;

export const CardName = styled.h3`
  align-self: center;
  justify-self: center;
  margin-bottom: 2px;
  color: white;
  font-size: var(--fontLarge);
  font-weight: var(--fontLight);
  letter-spacing: 0.1rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  background: -webkit-linear-gradient(white, #a1a1a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-transition: all var(--speed) ease;
  transition: all var(--speed) ease;

  &:hover {
    background: -webkit-linear-gradient(white, #c1c1c1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CardTitle = styled.h1`
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
  color: white;

  &:after {
    position: absolute;
  }
`;
