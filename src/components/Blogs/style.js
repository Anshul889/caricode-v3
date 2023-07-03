import styled from 'styled-components'
import { Cards, Card } from '../../styles/ecommerce-style'
import { People } from '../../styles/about-us'

export const Container = styled.div`
  max-width: 1200px;
  background-color: white;
  margin: 15px auto 10px auto;
  padding: 15px 0;
  width: 90%;

  @media screen and (min-width: 768px) {
    margin: 30px auto;
    padding: 30px 0;
    width: 96%;
    border-radius: 30px;
    h2 {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1200px) {
    margin: 90px auto;
    width: 90%;
    padding: 40px 0;
  }
`
export const Description = styled.div`
  width: 100%;
  margin: 30px auto 0px auto;
  font-weight: 800;
  @media screen and (min-width: 768px) {
    width: 90%;
    li{
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
    margin: 30px auto;
  }
`

export const Buttons = styled.div`
  grid-template-columns: repeat(3, max-content);
  column-gap: 10px;
  font-size: 12px;
  display: inline-grid;
  margin-left: 20px;
  ul {
    color: #444 !important;
  }
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

export const ChatBotFeatures = styled.div`
  display: grid;
`

export const CBFeature = styled.div`
  display: grid;
`

export const CBImage = styled.div``

export const CBText = styled.div``

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
  width: 100%;
  margin: 40px auto 0px auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 96%;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    ul {
      padding-left: 0px;
      li {
        list-style-type: none;
      }
    }
  }
`

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 10px;
  width: 90%;
  margin: 0 auto 10px auto;
`

export const ServicesContainer = styled.div`
  margin: 0 auto 25px auto;
  ul {
    li {
      margin-bottom: 4px;
    }
  }
  p {
    color: black;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    ul {
      padding-left: 0px;
      li {
        line-height: 1.5;
        font-size: 17px;
        list-style-type: none;
      }
    }
  }
`

export const MobileImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Testimonials = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgb(158, 133, 207);
  background: linear-gradient(
    119deg,
    rgba(158, 133, 207, 1) 0%,
    rgba(200, 142, 157, 0.7665266790309874) 35%,
    rgba(200, 142, 157, 1) 100%
  );
  padding: 30px 0;
  h2 {
    color: white;
    margin: 0 auto;
    width: 90%;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    max-width: 1200px;
    background: transparent;
    border-radius: 30px;
    margin-bottom: 70px;
    h2 {
      color: #515151;
      font-size: 48px;
    }
  }
`

export const TestPeople = styled(People)`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 95%;
    margin-bottom: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    div:nth-child(4) { 
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    div:nth-child(4) {
      display: block;
    }
  }
`

export const Provided = styled.div`
  @media screen and (min-width: 768px) {
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    background-color: white;
    padding: 40px 0;
    border-radius: 30px;
  }
  h2 {
    width: 90%;
    margin: 10px auto;
    text-align: center;
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
  }
`

export const FeatureList = styled.div`
  width: ${(props) => (props.full ? '100%' : '90%')};
  margin: 20px auto 40px auto;
  display: grid;
  row-gap: 10px;
  grid-auto-rows: 35px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    row-gap: 35px;
    margin: 40px auto 20px auto;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Feature = styled.div`
  display: grid;
  grid-template-columns: 29px 1fr;
  align-content: center;
  column-gap: 5px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    grid-template-rows: 60px auto;
  }
  @media screen and (min-width: 1200px) {
    grid-template-rows: 75px auto;
  }
`

export const FeatureImage = styled.div`
@media screen and (min-width: 768px) {
    height: 50px;
    width: 50px;
    place-self: center;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1200px) {
    height: 75px;
    width: 75px;
  }
`

export const FeatureText = styled.div`
  align-self: center;
  @media screen and (min-width: 768px) {
    text-align: center;
    align-self: start;
  }
  @media screen and (min-width: 1200px) {
    align-self: center;
  }
`

export const ChatBotSection = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: 1.5fr 1fr;
    column-gap: 20px;
  }
`

export const MobileContainer = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 30px;
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
    h2{
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
  }
`

export const Ditem = styled.div`
 @media screen and (min-width: 768px) {
  background-color: white;
  padding: 30px 0;
  border-radius: 30px;
 }
`

export const ServiceList = styled.div`
 width: ${(props) => (props.full ? '100%' : '90%')};
  margin: 20px auto 40px auto;
  display: grid;
  row-gap: 10px;
  grid-auto-rows: 35px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    row-gap: 35px;
    margin: 40px auto 20px auto;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
