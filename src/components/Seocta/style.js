import styled from 'styled-components'

export const Container = styled.div``

export const Inner = styled.div`
  width: 90%;
  margin: 30px auto 75px auto;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1000px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
  }
`

export const CTAHeader = styled.h2`
  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
  }
`

export const CTAText = styled.div`
  line-height: 29.12px;
  letter-spacing: 0.02em;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    padding-top: 15px;
  }
`
