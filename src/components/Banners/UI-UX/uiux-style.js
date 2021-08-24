import styled from 'styled-components'

export const Desktop = styled.div`
  display: none;
  @media only screen and (min-width: 760px) and (min-height: 450px) {
    display: grid;
    grid-template-columns: 450px auto;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`

export const HeroText = styled.div`
  @media only screen and (min-width: 760px) and (min-height: 450px) {
    align-self: center;
    h1 {
      font-size: 64px;
      text-transform: none;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: 1px;
    }

    p {
      font-size: 20px;
    }
  }
`

export const DAnim = styled.div`
  @media only screen and (min-width: 760px) and (min-height: 450px) {
    place-self: center;
    transform: translateX(5%);
  }
`

export const Mobile = styled.div`
  height: calc(100vh - 56px - 56px);
  width: 100%;
  overflow: hidden;
  h1 {
    font-size: 36px;
    text-transform: none;
    font-weight: 800;
    line-height: 42px;
    letter-spacing: -0.4px;
    width: 60%;
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
