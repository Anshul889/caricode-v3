import styled from 'styled-components'

export const DContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    height: 540px;
    place-content: center;
    width: 96%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    height: 700px;
  }
`

export const DHero = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    56deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(157, 145, 191, 1) 0%,
    rgba(187, 135, 135, 0.8911939775910365) 39%,
    rgba(232, 170, 163, 1) 100%
  );
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  column-gap: 15px;
  h1 {
    font-size: 48px;
    text-transform: none;
    line-height: 1.2;
    letter-spacing: 1px;
    margin-left: 7%;
    margin-top: 25%;
    color: white;
  }
  p {
    margin-left: 7%;
    margin-bottom: 25%;
    color: white;
  }
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1024px) {
    column-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
`

export const HeroText = styled.div``

export const Dashboard = styled.div`
  display: grid;
  place-content: center;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
`

export const MHero = styled.div`
  height: calc(100vh - 56px - 56px);
  width: 100%;
  overflow: hidden;
  background: rgb(194, 114, 110);
  background: linear-gradient(
    45deg,
    rgba(194, 114, 110, 1) 0%,
    rgba(142, 116, 202, 1) 100%
  );
  color: white;
  h1 {
    font-size: 36px;
    text-transform: none;
    line-height: 42px;
    width: 70%;
    margin-left: 7%;
    margin-top: 40px;
    margin-bottom: 20vh;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MAnimation = styled.div`
  width: 95%;
  margin-bottom: 20vh;
  margin-left: auto;
  margin-right: auto;
  .gatsby-image-wrapper {
    border-radius: 10px;
  }
`
