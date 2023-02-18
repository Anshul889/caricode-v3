import styled from 'styled-components'
import { Button } from '../components/Button/Button'

export const Container = styled.div``

export const FirstHeader = styled.div`
  background: rgb(164, 128, 255);
  background: linear-gradient(
    54deg,
    rgba(164, 128, 255, 1) 0%,
    rgba(255, 143, 131, 1) 100%
  );
  color: white;
  padding: 38px 0;
  content-visibility: auto;
  height: 80px;
  display: grid;
  place-content: center;
`

export const FirstHeaderHeading = styled.h4`
  width: 90%;
  margin: 0px auto;
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 21.6333px;
    letter-spacing: 4.32667px;
    line-height: 32.45px;
  }
`

export const WhyContainer = styled.div`
  text-align: center;
  background-color: white;
  content-visibility: auto;
`

export const WhyInner = styled.div`
  @media screen and (min-width: 830px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`

export const Why = styled.div`
  border-bottom: 1px solid rgba(144, 144, 144, 0.25);
  padding: 38px 0;
  @media screen and (min-width: 830px) {
    &:nth-child(-n + 3) {
      border-right: 1px solid rgba(144, 144, 144, 0.25);
    }
  }
  @media screen and (min-width: 1024px) {
    &:nth-child(1) {
      padding-right: 30px;
      padding-top: 40px;
    }
    &:nth-child(3) {
      padding-right: 30px;
      padding-left: 30px;
    }
    &:nth-child(4) {
      padding-left: 30px;
    }
  }
`

export const InnerStyles = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const ReferralAnimation = styled.div`
  height: 170px;
  overflow: hidden;

  @media screen and (min-width: 600px) {
  }
`

export const CostEfectiveH = styled.h4``

export const CostEffectiveP = styled.p`
  display: block;
  height: 40px;
`

export const Why2 = styled.div`
  border-bottom: 1px solid rgba(144, 144, 144, 0.25);
  padding: 38px 0;
  @media screen and (min-width: 600px) {
    display: none;
  }
`

export const RoiH = styled.h4``

export const LoyaltyAnimation = styled.div`
  height: 220px;
  @media screen and (min-width: 600px) {
    height: 170px;
  }
`

export const LoyaltyH = styled.h4``

export const LoyaltyP = styled.p``

export const ReferralH = styled.h4``

export const ReferralP = styled.p``

export const SecondHeader = styled.div`
  color: white;
  padding: 38px 0;
`

export const SecondHeaderH = styled.h3`
  width: 80%;
  margin: 10px auto;
  text-transform: none;
  max-width: 800px;
  @media screen and (min-width: 830px) {
    margin: 20px auto;
    font-size: 28px;
    text-align: center;
  }
`

export const HowContainer = styled.div`
  background: linear-gradient(
    45deg,
    rgba(194, 114, 110, 1) 0%,
    rgba(142, 116, 202, 1) 100%
  );
  color: white;
`

export const HowInner = styled.div`
  p {
    color: white;
  }
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const CustomerExperience = styled.div`
  padding-top: 38px;
`

export const CustomerImage = styled.div`
display: grid;
place-items: center;
  background-color: white;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 38px;
  @media screen and (min-width: 600px) {
    padding-top: 17px;
    padding-bottom: 17px;
  }
`

export const CustomerImg = styled.img`
  margin: 0 50px;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`

export const HowH = styled.h4`
  font-size: 17.6px;
  margin-bottom: 17px;
  font-weight: 400;
  letter-spacing: 0.2em;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  @media screen and (min-width: 830px) {
    height: 44px;
  }
`

export const HowP = styled.p`
  margin-bottom: 38px;
  font-weight: 300;
  line-height: 29.12px;
  text-align: center;
`

export const EmailAuto = styled.div`
  padding-top: 38px;
  border-bottom: 1px solid rgba(144, 144, 144, 0.25);
  &:last-child {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 600px) {
    border-bottom: none;
  }
`

export const EmailImage = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 0px 15px;
  margin-bottom: 38px;
  @media screen and (min-width: 830px) {
    height: 164px;
  }
  @media screen and (min-width: 1024px) {
    height: 162px;
  }
`

export const EmailImg = styled.img`
  width: 100%;
`

export const LoyaltyImage = styled.div`
  margin-bottom: 38px;
  overflow: hidden;
  border-radius: 4px;
  @media screen and (min-width: 830px) {
    height: 164px;
  }
  @media screen and (min-width: 1024px) {
    height: 162px;
  }
`

export const Auth = styled.div`
  display: grid;
  grid-template-columns: max-content;
  gap: 15px;
  place-content: center;
  margin-bottom: 38px;
  background-color: white;
  height: 44.8vw;
  border-radius: 4px;
  @media screen and (min-width: 830px) {
    height: 164px;
  }
  @media screen and (min-width: 1024px) {
    height: 162px;
  }
`

export const GoogleAuth = styled(Button)`
  border-radius: 4px;
  background-color: red;
  text-transform: none;
  padding: 12px 40px;
  font-size: 17px;
`

export const FacebookAuth = styled(GoogleAuth)`
  background-color: #4c69ba;
`

export const HowRefer = styled.div`
  padding: 25px 0;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 38px;
  @media screen and (min-width: 830px) {
    height: 112px;
    padding: 26px 0;
  }
  @media screen and (min-width: 1024px) {
    height: 110px;
  }
`

export const RefText = styled.div`
  font-size: 20px;
`

export const RefForm = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  padding: 10px;
  gap: 10px;
`

export const RefInput = styled.input`
  background-color: rgba(144, 144, 144, 0.15);
  border: 1px solid rgba(144, 144, 144, 0.25);
  border-radius: 4px;
`

export const Invite = styled(Button)``

export const FormFeature = styled.form`
  width: 90%;
  margin: 0 auto;
`

export const FormFeatureInput = styled.input`
  margin-bottom: 12px;
`
