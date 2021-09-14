import styled from 'styled-components'

export const AppHero = styled.div`
  height: 900px;
  @media screen and (min-width: 830px) {
    margin-top: 60px;
    margin-bottom: 60px;
    height: 950px;
  }
  @media screen and (min-width: 1024px) {
    height: 800px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  text-transform: none;
  font-weight: 800;
  line-height: 42px;
  letter-spacing: -0.4px;
  text-align: center;
  width: 80%;
  margin: 10px auto;
  @media screen and (min-width: 830px) {
    font-size: 52px;
    text-align: center;
    margin-bottom: 35px;
  }
`

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    font-size: 23px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 70px;
  }
`

export const AppAnimations = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media screen and (min-width: 830px) {
    width: 70%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    width: 100%;
    max-width: 1200px;
    align-items: start;
    justify-items: center;
  }
`

export const Feature = styled.div`
  margin-top: 60px;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
`

export const FeatureP = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
  @media screen and (min-width: 1024px) {
  }
`

export const FeatureHeading = styled.h2`
  margin-bottom: 10px;
  font-size: 42px;
  text-align: center;
  text-transform: none;
  @media screen and (min-width: 1024px) {
  }
`

export const ReactAnimation = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    height: 250px;
  }
`

export const MobileAnimation = styled.div`
  width: 100%;
  margin: 0 auto;
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  z-index: 10;
  @media screen and (min-width: 830px) {

  }
  @media screen and (min-width: 1024px) {
    height: auto;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
`

export const PlaceholderImages = styled.div`
  width: 100%;
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 1024px) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
`

export const PlaceholderImage = styled.img`
  width: 77%;
  margin: 20px auto;
  @media screen and (min-width: 1024px) {
    
  }
`

export const Placeholder = styled.div`
  width: 100%;
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  padding-top: 100%;
  @media screen and (min-width: 1024px) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
`

export const SecondFeature = styled.div`
  grid-row: 3 / span 1;
  grid-column: 1 / span 1;
  @media screen and (min-width: 1024px) {
    margin-top: 50px;
    text-align: center;
    transform: translateY(0px);
    margin-left: 0px;
    grid-row: 1 / span 1;
    grid-column: 3 / span 1;
  }
`

export const SecondFeatureP = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
  @media screen and (min-width: 1024px) {
  }
`
export const SecondFeatureHeading = styled.h2`
  margin-bottom: 10px;
  font-size: 42px;
  text-align: center;
  text-transform: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`

export const ServerAnimation = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    transform: translateY(-10px);
  }
`
