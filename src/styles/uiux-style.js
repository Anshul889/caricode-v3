import styled from 'styled-components'

export const Mobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Desktop = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const PrinciplesHeading = styled.div`
  background-color: #f5f5f5;
  padding-top: 20px;
  padding-bottom: 1px;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.15em;
    line-height: 40px;
    margin: 0.96em 0 24px 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
  }

  p {
    width: 90%;
    margin: 24px auto 48px auto;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 48px;
      line-height: 50px;
    }
    p {
      font-size: 17px;
    }
  }
`
export const Principles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  margin: 20px auto;
  max-width: 1200px;
  margin-bottom: 45px;
  row-gap: 20px;
  background-color: #f5f5f5;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
  }
`

export const Principle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 5%;
  padding-bottom: 13%;
  border-radius: 30px;
  h4 {
    margin-top: 15px;
    margin-bottom: 25px;
    place-self: center;
  }
  p {
    text-align: center;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 80px 150px;
    padding-bottom: 5%;
  }
`

export const Animation = styled.div``

export const Performance = styled.div`
  h2 {
    text-align: center;
    font-weight: 800;
    letter-spacing: 0.08em;
    line-height: 40px;
    margin: 64px auto 24px auto;
    text-transform: none;
    text-align: center;
    font-size: 36px;
    max-width: 1200px;
    width: 90%;
  }

  p {
    width: 90%;
    margin: 24px auto 48px auto;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 48px;
      line-height: 50px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }
    p {
      font-size: 17px;
    }
  }
`

export const Olydiv = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`

export const Showcase = styled(PrinciplesHeading)``

export const InnerStyles = styled.div`
  h2 {
  }
`

export const Hierarchy = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: 45px;
  background-color: white;
  width: 90%;
  padding: 15px 0 5px 0;
  border-radius: 30px;
  p {
    width: 90%;
    margin: 20px auto;
  }
`

export const Brand = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1080px;
  margin-bottom: 45px;
  background-color: white;
  padding: 5%;
  border-radius: 30px;
`

export const IconsDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1080px;
  padding: 5%;
  background-color: white;
  border-radius: 30px;
  padding-bottom: 1px;
`
export const Illustrations = styled.div``
export const Icon = styled.div`
  margin-bottom: 45px;
`
export const MemorableDiv = styled.div`
  margin-bottom: 45px;
`
export const Feedback = styled.div`
  width: 80%;
  margin: 40px auto;
  max-width: 1080px;
  padding: 5%;
  background-color: white;
  border-radius: 30px;
`
export const FeedbackInner = styled.div``

export const Second = styled.div`
  background-color: #f5f5f5;
  padding: 48px 0;
`

export const SecondHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.15em;
    line-height: 50px;
    margin: 0.96em 0 24px 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 48px;
  }

  p {
    width: 90%;
    margin: 24px auto 24px auto;
    text-align: center;
    font-size: 17px;
  }
`

export const ShowcaseOne = styled.div`
  display: grid;
  grid-template-columns: 440px 2fr;
  padding-top: 40px;
  column-gap: 30px;
`

export const ItemOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 5%;
  padding-right: 13px;
  border-radius: 30px;
`

export const OneAnimation = styled.div`
  display: grid;
  place-content: center;
  height: 300px;
`

export const ItemText = styled.div`
  h3 {
    text-align: center
  }
  p {
  }
`

export const ItemTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 5%;
  border-radius: 30px;
  grid-template-rows: 300px 179px;
`

export const TwoAnimation = styled.div`
  transform: scale(1.3);
  display: grid;
  place-content: center;
  height: 300px;
`

export const ShowcaseTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 40px;
  column-gap: 30px;
`

export const ItemThree = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 7%;
  border-radius: 30px;
`

export const IconAnimations = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ItemFour = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 7%;
  border-radius: 30px;
`
