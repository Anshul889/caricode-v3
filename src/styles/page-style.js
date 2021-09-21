import styled from 'styled-components'

export const Container = styled.div`
  p {
    color: black;
  }
`

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;
  max-width: 1200px;
  margin: 20px auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
    column-gap: 30px;
  }
`

export const Heading = styled.h1`
  font-size: 30px;
  line-height: 32px;
  margin-top: 20px;
  text-transform: none;
  letter-spacing: 0.06em;
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 830px) {
    width: 96%;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`

export const Content = styled.div`
  border-bottom: 1px solid lightgray;
  p {
    width: 90%;
    margin: 20px auto;
  }
  h4 {
    text-align: start;
    width: 90%;
    margin: 20px auto;
  }
  ul {
    width: 90%;
    margin: 1.4em auto;
  }
  @media screen and (min-width: 830px) {
    border-bottom: none;
    padding-bottom: 60px;
    p {
      width: 96%;
    }
    h4 {
      width: 96%;
    }
  }
  @media screen and (min-width: 1024px) {
    p {
      width: 90%;
    }
    h4 {
      width: 90%;
    }
  }
`

export const Recommended = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const Rec = styled.div`
  position: sticky;
  top: 20px;
`

export const FirstItem = styled.div`
  a {
    color: #444;
  }
`

export const SecondItem = styled(FirstItem)``
