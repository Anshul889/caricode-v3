import styled from "styled-components";
import { Button } from "../Button/Button";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 45px;
  background-color: #7c759a;
  color: white;
  @media screen and (min-width: 600px) {
    padding-top: 100px;
    padding-bottom: 100px;
    display: grid;
  }
`;

export const Grid = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-self: center;
    width: 85%;
  }
  @media screen and (min-width: 1600px) {
    height: auto;
  }
`;

export const Animation = styled.div`
  transform: scale(1.2);
  height: 300px;
  padding-top: 10px;
  @media screen and (min-width: 600px) {
    height: 400px;
    transform: scale(1.1);
  }

  @media screen and (min-width: 1600px) {
    height: 450px;
    transform: scale(1);
    padding-top: 0px;
  }
`;

export const BannerText = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    display: grid;
    place-content: center;
    text-align: start;
  }
`;

export const Heading = styled.h1`
  font-size: 30px;
  text-transform: none;
  letter-spacing: 0.5px;
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 40px;
  }
`;

export const TagLine = styled.p`
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 23px;
  }
`;

export const GetStarted = styled(Button)`
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
