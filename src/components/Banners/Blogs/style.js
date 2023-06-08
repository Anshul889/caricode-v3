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
    margin-top: 10%;
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
    border-radius: 30px;
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
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
`

export const MHero = styled.div`
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
    width: 90%;
    margin: 80px auto 30px auto;
    text-align: center;
  }
  p {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 40px;
    color: white;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MAnimation = styled.div`
  width: 95%;
  margin-bottom: 15vh;
  margin-left: auto;
  margin-right: auto;
  .gatsby-image-wrapper {
    border-radius: 10px;
  }
`

export const Gallery = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    .gatsby-image-wrapper {
      border-radius: 5px;
      &:nth-child(2) {
        top: 75px;
      }
      &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
      }
      &:nth-child(3) {
        top: -20px;
      }
    }
  }
`
