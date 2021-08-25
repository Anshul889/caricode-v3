import styled from 'styled-components'

export const Mobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
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
    p{
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
    p{
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
