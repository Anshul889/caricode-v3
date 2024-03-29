import styled from 'styled-components'

export const About = styled.div`
  width: 90%;
  margin: 0 auto 45px auto;
  max-width: 1080px;
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
`

export const Story = styled.div`
  width: 90%;
  margin: 0 auto 75px auto;
  max-width: 1080px;
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
`

export const People = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  margin: 40px auto 80px auto;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Person = styled.div`
  background-color: white;
  border-radius: 30px;
  padding: 30px;
  h4 {
    color: #444;
    margin-bottom: 7px;
    text-transform: none;
  }
  p {
    color: #8795a1;
    text-align: left;
    margin: 0;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    padding: 30px 20px;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  margin: 0px auto 15px auto;
  border-radius: 50%;
  overflow: hidden;
  img {
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    margin: 15px auto
  };
`
