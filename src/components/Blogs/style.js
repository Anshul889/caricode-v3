import styled from 'styled-components'
import { Cards, Card } from '../../styles/ecommerce-style'

export const Container = styled.div`
  max-width: 1200px;
  background-color: white;
  margin: 45px auto;
  padding: 15px 0;
  width: 90%;
  @media screen and (min-width: 768px) {
    margin: 30px auto;
    padding: 15px 0;
    width: 96%;
  }
  @media screen and (min-width: 1024px) {
    margin: 90px auto;
    width: 90%;
    padding: 30px 0;
  }
`
export const Description = styled.div`
  width: 100%;
  margin: 30px auto;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`

export const Buttons = styled.div`
  grid-template-columns: repeat(3, max-content);
  column-gap: 10px;
  font-size: 12px;
  display: inline-grid;
  margin-left: 20px;
  button {
    border-radius: 30px;
  }
  text-transform: none;
  @media screen and (min-width: 768px) {
    display: grid;
    font-size: 16px;
    margin-left: 0px;
    button {
      padding: 6px 24px;
      font-size: 13px;
    }
  }
`

export const Sort = styled.div`
  h3 {
    display: inline-block;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
    margin-left: 2.5%;
    display: inline-block;
    h3 {
      display: block;
    }
  }
  @media screen and (min-width: 1024px) {
    margin-left: 5%;
  }
`

export const Filter = styled(Sort)`
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const BlogCards = styled(Cards)`
  display: grid;
  margin: 30px auto;
  grid-template-rows: auto;
  row-gap: 20px;
  max-width: 1200px;
  transform: none;
  height: 400px;
  @media screen and (min-width: 830px) {
    width: 96%;
    column-gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    height: auto;
    column-gap: 40px;
  }
`

export const BlogCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding-top: 0px;
  margin: 0px;
  width: 100%;
  padding-bottom: 0px;
  height: 120px;
  p {
    text-align: start;
    margin: 15px auto;
  }
  h3 {
    width: 90%;
    margin: 10px auto;
  }
  span {
    &:nth-child(3) {
      border: 1px solid #444;
      border-radius: 30px;
      padding: 3px 10px;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 830px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto max-content;
    padding-bottom: 10px;
  }
`

export const Stats = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: grid;
    width: 90%;
    grid-template-columns: max-content max-content max-content 1fr;
    column-gap: 10px;
    margin: 15px auto;
    img {
      height: 25px;
      &:nth-child(4) {
        justify-self: end;
      }
    }
  }
`

export const Title = styled.div`
  display: grid;
  width: 90%;
  margin: 10px auto;
  grid-template-columns: repeat(3, max-content);
  column-gap: 10px;
`

export const Excerpt = styled.p`
  display: none;
  color: #444;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 10px;
  width: 90%;
  margin: 0 auto 10px auto;
`
