import styled from 'styled-components'
import { Button } from '../Button/Button'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 45px;
  background-color: #292728;
  color: white;
  @media screen and (min-width: 600px) {
    padding-top: 70px;
    display: grid;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding-top: 20px;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(12, 1fr);
    place-self: center;
    width: 95%;
    padding-top: 0px;
    transform: translateX(50px)
  }
  @media screen and (min-width: 1600px) {
    height: auto;
  }
`

export const Animation = styled.div`
  height: 300px;
  padding-top: 10px;
  z-index: 1;
  @media screen and (min-width: 600px) {
    height: 600px;
    grid-column: 5 / span 9;
    grid-row: 1/ span 1;
    transform: translateY(-80px);
  }

  @media screen and (min-width: 1600px) {
    height: 450px;
    transform: scale(1);
    padding-top: 0px;
  }
`

export const BannerText = styled.div`
  width: 90%;
  margin: 0 auto;
  z-index: 2;
  @media screen and (min-width: 600px) {
    display: grid;
    place-content: center;
    text-align: start;
    grid-column: 1 / span 5;
    grid-row: 1/ span 1
  }
`

export const Heading = styled.h1`
  font-size: 30px;
  text-transform: none;
  letter-spacing: 0.5px;
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 40px;
  }
`

export const TagLine = styled.p`
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 23px;
  }
`

export const GetStarted = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: white;
  color: #444;
  @media screen and (min-width: 600px) {
    display: none;
  }
`
