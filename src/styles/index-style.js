import styled from 'styled-components'

export const SectionTwo = styled.div`
  border-top: solid 1px rgba(97, 97, 97, 0.15);
  margin-bottom: 0px;
  content-visibility: auto;
  border-bottom: 1px solid rgba(104, 104, 104, 0.15);
  @media only screen and (min-width: 830px) {
    border-bottom: none;
  }
`

export const InnerStyles = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (min-width: 830px) {
    padding-top: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
  @media only screen and (min-width: 1024px) {
    width: 90%;
    grid-template-columns: 1fr 1.1fr 1fr;
  }
`

export const Item = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(104, 104, 104, 0.15);
  display: grid;
  overflow: hidden;
  &:nth-child(1) {
    grid-template-rows: 270px max-content max-content max-content;
    padding-top: 0;
  }
  &:nth-child(3) {
    border-bottom: none;
  }
  h4 {
  }
  p {
    width: 90%;
    margin: 0 auto 24px auto;
    text-align: center;
  }
  button {
    width: 80%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 830px) {
    grid-template-rows: 230px max-content 185px max-content;
    border-bottom: none;
    border-right: 1px solid rgba(104, 104, 104, 0.15);
    padding-bottom: 40px;
    p {
      width: 95%;
    }
    &:nth-child(1) {
      padding-right: 0px;
      padding-top: 30px;
      grid-template-rows: 220px max-content 185px max-content;
    }
    &:nth-child(3) {
      border-right: none;
      padding-left: 0px;
      padding-top: 30px;
      grid-template-rows: 219px max-content 185px max-content;
    }
  }

  @media only screen and (min-width: 1024px) {
    p {
      width: 90%;
    }
    &:nth-child(1) {
      padding-right: 10px;
    }
    &:nth-child(3) {
      padding-left: 20px;
    }
  }
`

export const Animation = styled.div``

export const IconAnimations = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  width: 100%;
  grid-template-rows: max-content max-content;
  justify-content: center;
`

export const SalesAnimation = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 40px;
  @media only screen and (min-width: 830px) {
    width: 100%;
    padding-bottom: 0;
  }
`

export const SectionThreeContainer = styled.div`
  background-color: #f6f6f6;
  padding-top: 10px;
  h3 {
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    text-transform: capitalize;
  }
  @media only screen and (min-width: 830px) {
    padding: 45px 0;
    h3 {
      font-size: 28px;
    }
  }
`

export const UxContainer = styled.div`
  height: 100px;
  width: 100px;
  @media only screen and (min-width: 830px) and (max-width: 1025px) {
    height: 75px;
    width: 75px;
  }
`

export const SectionThree = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  padding-bottom: 40px;
  @media only screen and (min-width: 830px) {
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    column-gap: 25px;
    padding-top: 10px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Card = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 15px;
  width: 90%;
  margin: 0 auto;
  h4 {
    text-align: start;
    font-weight: 700;
    margin-bottom: 13px;
  }
  button {
    justify-self: center;
    margin: 20px 0;
    width: 80%;
  }
  p {
    margin: 0;
  }
  @media only screen and (min-width: 830px) {
    width: 100%;
    row-gap: 20px;
  }
`

export const CardImage = styled.div`
  @media only screen and (min-width: 830px) {
    img {
      cursor: pointer;
      &:hover {
        transition: transform 0.5s ease-in-out;
        transform: scale(1.1);
      }
    }
  }
`

export const CardText = styled.div`
  padding: 2em 1.5em 0.1em 1.5em;
  background-color: white;
  display: grid;
  @media only screen and (min-width: 830px) {
    grid-template-rows: 40px 21px 116px 100px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-rows: 40px 21px 146px 100px;
  }
`
