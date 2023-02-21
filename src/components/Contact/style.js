import styled from 'styled-components'

export const Container = styled.section`
  width: 90%;
  margin: 0 auto 75px auto;
  max-width: 1200px;
  padding-top: 20px;
  @media only screen and (min-width: 830px) {
    .contact {
      width: 85%;
      padding-top: 40px;
    }
  }
`

export const Heading2 = styled.h2`
  @media only screen and (min-width: 830px) {
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0.7px;
    line-height: 1.5;
    margin: 0 0 0.96em 0;
    text-transform: uppercase;
  }
`
