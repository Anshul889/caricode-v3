import styled from 'styled-components'

export const SectionTwo = styled.div`
  border-top: solid 1px rgba(97, 97, 97, 0.15);
  margin-bottom: 20px;
  content-visibility: auto;
  border-bottom: 1px solid rgba(104, 104, 104, 0.15);
`

export const InnerStyles = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (min-width: 830px) {
    padding-top: 0px;
    grid-template-columns: 1fr 1.1fr 1fr;
    width: 90%;
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

  @media only screen and (min-width: 830px) {
    grid-template-rows: 250px max-content max-content max-content;
    border-bottom: none;
    border-right: 1px solid rgba(104, 104, 104, 0.15);
    &:nth-child(1) {
      padding-right: 10px;
      padding-top: 30px;
      grid-template-rows: 240px max-content max-content;
    }
    &:nth-child(3) {
      border-right: none;
      padding-left: 20px;
      padding-top: 30px;
      grid-template-rows: 240px max-content max-content;
    }
  }
`



export const Animation = styled.div`
`

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
