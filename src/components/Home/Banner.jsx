import React from 'react'
import {
  Container,
  BannerText,
  Heading,
  TagLine,
  Animation,
  Grid,
  GetStarted,
} from './style'
import Lottie from 'react-lottie'
import animationData from './website-development.json'
import { StaticImage } from 'gatsby-plugin-image'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Banner = () => {
  return (
    <Container>
      <Grid>
        <BannerText>
          <Heading>We Build, Deploy and Manage Progressive Web Apps</Heading>
          <TagLine>
            Take the online presence
            <br /> of your business to the next level
          </TagLine>
          <GetStarted
            onClick={() =>
              window.scrollTo({
                top: 700,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            {' '}
            Get Started
          </GetStarted>
        </BannerText>
        <Animation>
          <StaticImage src="./turo.jpg" />
        </Animation>
      </Grid>
    </Container>
  )
}
export default Banner
