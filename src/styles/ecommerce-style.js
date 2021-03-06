import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 45px 0;
  clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 95%);
  background: linear-gradient(
    54deg,
    rgba(164, 128, 255, 1) 0%,
    rgba(255, 143, 131, 1) 100%
  );
  transform: translateY(-73px);
  color: white;
  h2 {
    padding-top: 15px;
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    margin-bottom: 28px;
    text-transform: capitalize;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    padding: 55px 0;
    transform: translateY(-80px);
    clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
    h2 {
      margin-bottom: 38px;
    }
  }
`

export const Carousel = styled.div`
  display: grid;
  grid-template-columns: 66% 66% 66% 66% 66% 66% 5px;
  overflow: scroll;
  grid-gap: 30px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    max-width: 1080px;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    overflow: visible;
    transform: translateX(0);
  }
`

export const CarouselItem = styled.div`
  transform: translateX(5%);
  .gatsby-image-wrapper {
    border-radius: 4px;
  }

  p {
    color: white;
  }
  @media screen and (min-width: 768px) {
    .gatsby-image-wrapper:hover {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.03);
    }
  }
`

export const Cards = styled.div`
  transform: translateY(-23px);
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 470px;
    max-width: 1080px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
`

export const Heading = styled.h2`
  text-transform: capitalize;
  max-width: 1200px;
  text-align: center;
  @media screen and (min-width: 768px) {
    grid-column: 1 / span 3;
    text-align: center !important;
  }
`

export const Card = styled.div`
  width: 90%;
  margin: 38px auto;
  background-color: white;
  padding-bottom: 10px;
  box-shadow: 0 1em 5em rgba(0, 0, 0, 0.05);
  padding-top: 10px;
  p {
    width: 90%;
    margin: 15px auto;
    text-align: center;
  }
  h4 {
    padding-top: 20px;
  }
  @media screen and (min-width: 830px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 100px 205px;
    p {
      margin: 15px auto;
    }
  }
  @media screen and (min-width: 1024px) {
    p {
      margin: 35px auto;
    }
  }
`

export const Number = styled.div`
  place-self: center;
  font-size: 40px;
  text-align: center;
`
