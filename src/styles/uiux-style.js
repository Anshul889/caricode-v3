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
    overflow: hidden;
  }
`

export const PrinciplesHeading = styled.div`
  background-color: #f5f5f5;
  padding-top: 20px;
  padding-bottom: 1px;

  h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    line-height: 40px;
    margin: 0.96em 0 24px 0;
    text-transform: none;
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
    grid-column-gap: 15px;
    width: 97%;
  }
  @media screen and (min-width: 1024px) {
    grid-column-gap: 30px;
    width: 90%;
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
    grid-template-rows: 200px 70px 155px;
    padding-bottom: 5%;
    padding-top: 2%;
    p {
      margin-top: 0;
      text-align: start;
      width: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-rows: 200px 64px 170px;
    padding-top: 5%;
    p {
      margin-top: 24px;
      text-align: center;
      width: 90%;
    }
  }
`

export const Animation = styled.div``

export const Performance = styled.div`
  h2 {
    text-align: center;
    letter-spacing: 0.1px;
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
    }
    p {
      font-size: 17px;
    }
  }
  @media only screen and (width: 834px) and (height: 1194px) and (orientation: portrait) {
    h2 {
      max-width: 700px;
    }
    p {
      max-width: 550px;
    }
  }
`

export const Olydiv = styled.div`
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1200px) {
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
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 50px;
    margin: 0.96em 0 24px 0;
    text-transform: none;
    text-align: center;
    font-size: 48px;
  }

  p {
    width: 90%;
    margin: 24px auto 24px auto;
    text-align: center;
    font-size: 17px;
  }
  @media screen and (min-width: 768px) {
    width: 97%;
  }
  @media screen and (min-width: 1024px) {
    width: 90%auto;
  }
`

export const ShowcaseOne = styled.div`
  display: grid;
  grid-template-columns: 440px 2fr;
  padding-top: 40px;
  column-gap: 30px;
  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
  @media screen and (min-width: 1024px) {
    column-gap: 30px;
  }
  @media only screen and (width: 834px) and (height: 1194px) and (orientation:portrait) {
    grid-template-row: auto;
}
  
`

export const ItemOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 5%;
  padding-right: 13px;
  border-radius: 30px;
  @media only screen and (width: 834px) and (height: 1194px) and (orientation:portrait) {
  p{
   margin: 0;
   width: 100%;
   height: 160px;
  }
}
  
`

export const OneAnimation = styled.div`
  display: grid;
  place-content: center;
  height: 300px;
`

export const ItemText = styled.div`
  h3 {
    text-align: center;
    text-transform: uppercase;
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
  grid-template-rows: 287px 179px;
  @media screen and (min-width: 768px) {
    grid-template-rows: 304px 179px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-rows: 287px 179px;
  }
  @media only screen and (width: 834px) and (height: 1194px) and (orientation:portrait) {
  p{
    margin: 0;
    width: 100%;
  }
}
  
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
  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
  @media screen and (min-width: 1024px) {
    column-gap: 30px;
  }
`

export const ItemThree = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 7%;
  border-radius: 30px;
  grid-template-rows: 300px 179px;
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
  grid-template-rows: 300px 179px;
`

export const Loader = styled.div``

export const Drag = styled.div``

export const Everywhere = styled(Performance)`
  padding-bottom: 50px;
  background-color: #f5f5f5;
  h2 {
    margin-top: 0;
    padding-top: 64px;
  }
`

export const EvwhInner = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 0.8fr;
  grid-template-rows: 1fr 1fr;
  width: 90%;
  margin: 30px auto;
  max-width: 1200px;
  grid-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 225px 225px max-content 225px max-content;
  } */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 225px 225px max-content 225px max-content;
  width: 90%;
  margin: 30px auto;
  max-width: 1200px;
  grid-gap: 30px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 0.8fr;
    grid-template-rows: 190px 190px;
    width: 97%;
    grid-gap: 15px;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    grid-gap: 30px;
    grid-template-rows: 1fr 1fr;
  }
  @media only screen and (width: 834px) and (height: 1194px) and (orientation:portrait) {
  grid-template-rows: 190px 180px;
}
  
`

export const BigItem = styled.div`
  background-color: rgb(255, 90, 111);
  border-radius: 10px;
  display: grid;
  @media screen and (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    border-radius: 30px;
  }
`

export const SmallItem = styled.div`
  background-color: white;
  border-radius: 10px;
  will-change: transform;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    grid-column: 2 / span 1;
  }
`

export const Pinterest = styled(SmallItem)`
  background-color: #f2304d;
`

export const Airbnb = styled.div`
  place-self: center;
  width: 40%;
  color: white;
  text-align: center;
  font-size: 24px;
  h3 {
    margin-top: 0px;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
    font-size: 28px;
  }
`

export const Duolingo = styled.div`
  grid-column: 2 / span 1;
  border-radius: 10px;
`

export const Headspace = styled.div`
  grid-column: 2 / span 1;
  border-radius: 10px;
  background-color: red;
`

export const SmallItemText = styled.div`
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 25px;
  font-family: 'Averta', sans-serif;
  @media screen and (min-width: 768px) {
    grid-column: 3 / span 1;
    margin-top: 10px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 50px;
  }
`
