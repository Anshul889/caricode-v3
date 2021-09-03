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
  span {
    justify-self: center;
  }
  h3 {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    grid-template-rows: auto max-content max-content;
    width: 100%;
    h3{
      margin: 30px 0;
    }
  }
`

export const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Features = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`