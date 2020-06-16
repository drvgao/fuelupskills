import styled, { css } from "styled-components";

export const CardList = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  grid-area: card;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  display: block;
  width: 100%;
  max-width: 250px;
  height: 280px;
  font-size: var(--fontOrigin);
  border-radius: 8px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  -webkit-transition: all var(--speed) ease;
  transition: all var(--speed) ease;

  &:hover {
    box-shadow: 0 40px 130px rgba(0, 0, 0, 0.6);
    transform: scale(1.1, 1.1);
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  -webkit-transition: all var(--speed) ease;
  transition: all var(--speed) ease;
  animation-name: zoom;
  animation-duration: 30s;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const CardHeader = styled.div`
  display: grid;
  width: 100%;
  height: 220px;
`;

export const CardProfile = styled.figure`
  -webkit-transform: scale(1.5, 1.5) translateZ(0);
  transform: scale(1.5, 1.5) translateZ(0);
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  -webkit-filter: grayscale(50%) contrast(75%) brightness(1.3);
  filter: grayscale(50%) contrast(75%) brightness(1.3);
  transition: all var(--speed) ease;
  mix-blend-mode: normal;
  backface-visibility: hidden;

  &:hover {
    -webkit-transform: scale(1, 1) translateZ(0);
    transform: scale(1, 1) translateZ(0);
  }
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
`;
