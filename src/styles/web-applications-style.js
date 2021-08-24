import styled from 'styled-components'

export const Container = styled.div``

export const FirstHeader = styled.div`
  background-color: rgb(94, 173, 187);
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
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1080px;
    width: 90%;
    margin: 0 auto;
  }
`

export const Why = styled.div`
  border-bottom: 1px solid rgba(144, 144, 144, 0.25);
  padding: 38px 0;
  @media screen and (min-width: 600px) {
    &:nth-child(-n + 3) {
      border-right: 2px solid rgba(144, 144, 144, 0.25);
    }
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
