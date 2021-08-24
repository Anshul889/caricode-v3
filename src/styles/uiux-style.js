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
    letter-spacing: 0.2em;
    line-height: 1.5;
    margin: 0.96em 0 0.96em 0;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    width: 90%;
    margin: 0 auto;
    text-align: center;
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
  }
`

export const Principle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  padding: 5%;
  border-radius: 30px;
  h4 {
    margin-top: 15px;
    margin-bottom: 25px;
    place-self: center;
  }
  p {
    text-align: center;
  }
`

export const Animation = styled.div``

export const Performance = styled.div`
  h2 {
  }
  p {
  }
`
