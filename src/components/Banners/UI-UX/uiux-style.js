import styled from 'styled-components'

export const Banner = styled.div`
  overflow: hidden;
  width: 100%;
  will-change: transform;
`

export const Desktop = styled.div`
  display: none;
  @media only screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 1200px;
    width: 100%;
    height: 470px;
  }
  @media only screen and (min-width: 1024px) {
    height: 597px;
    margin: 0 auto;
  }
`

export const HeroText = styled.div`
  @media only screen and (min-width: 760px) {
    align-self: center;
    grid-column: 1 / span 6;
    grid-row: 1 / span 1;
    margin-left: 2%;
    h1 {
      font-size: 54px;
      text-transform: none;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: 0.1px;
    }

    p {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-column: 1 / span 6;
    h1 {
      font-size: 64px;
    }
  }
`

export const DAnim = styled.div`
  @media only screen and (min-width: 760px) {
    place-self: center;
    transform: scale(1.15) translateX(-5%);
    grid-column: 7 / span 7;
    grid-row: 1 / span 1;
  }
  @media only screen and (min-width: 1024px) {
    transform: scale(1.35) translateX(-40px);
    margin: 0 auto;
  }
  @media only screen and (min-width: 1200px) {
    transform: scale(1.35) translateX(-10px);
  }
  @media only screen and (min-width: 1400px) {
    transform: scale(1.35) translateX(20px);
  }
`

export const Mobile = styled.div`
  height: calc(100vh - 56px - 56px);
  width: 100%;
  overflow: hidden;
  h1 {
    font-size: 36px;
    text-transform: none;
    line-height: 42px;
    letter-spacing: 0.1px;
    width: 70%;
    margin-left: 7%;
    margin-top: 40px;
  }
  @media only screen and (min-width: 760px) and (min-height: 450px) {
    display: none;
  }
`

export const MAnim = styled.div`
  width: 100%;
  transform: scale(1.27);
  position: relative;
  left: 0;
`
