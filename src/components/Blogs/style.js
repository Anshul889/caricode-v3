import styled from 'styled-components'
import { Cards, Card } from '../../styles/ecommerce-style'

export const Container = styled.div`
  max-width: 1200px;
  background-color: white;
  margin: 90px auto;
  padding: 30px 0;
`
export const Description = styled.div`
  width: 90%;
  margin: 30px auto;
`

export const Buttons = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, max-content);
    column-gap: 10px;
  }
`

export const Sort = styled.div`
  width: 350px;
  margin-left: 5%;
  display: inline-block;
  button {
    border-radius: 30px;
    padding: 6px 24px;
  }
`

export const Filter = styled(Sort)`
  margin-left: 20px;
`

export const BlogCards = styled(Cards)`
  margin: 30px auto;
  grid-template-rows: auto;
  column-gap: 40px;
  max-width: 1200px;
  width: 90%;
  transform: none;
`

export const BlogCard = styled(Card)`
  padding-top: 0px;
  margin: 0px;
  p {
    text-align: start;
    margin-top: 15px;
  }
  h3 {
    width: 90%;
    margin: 10px auto;
  }
  span{
    &:nth-child(3){
      border : 1px solid #444;
      border-radius: 30px;
      padding: 3px 10px;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-rows: auto max-content max-content;
    width: 100%;
  }
`

export const Stats = styled.div`
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
`

export const Title = styled.div`
  display: grid;
  width: 90%;
  margin: 10px auto;
  grid-template-columns: repeat(3, max-content);
  column-gap: 10px;
`

export const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
