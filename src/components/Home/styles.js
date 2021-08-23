import styled from "styled-components";

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

export const Banner = styled.div``;

export const Animation = styled.div`
  transform: scale(1.2);
  height: 300px;
  padding-top: 10px;
`;

export const BannerText = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 30px;
  text-transform: none;
  letter-spacing: 0.5px;
`;

export const TagLine = styled.p``;
