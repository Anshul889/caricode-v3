import React from 'react'
import Lottie from 'react-lottie'
import { Button } from '../Button/Button'
import { Container ,BannerText, Heading, TagLine, Animation } from './styles'
import animationData from './website-development.json'

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Container>
      <Banner>
        <Animation>
          <Lottie options={defaultOptions} isStopped={false} />
        </Animation>
        <BannerText>
          <Heading>We Build, Deploy and Manage Progressive Web Apps</Heading>
          <TagLine>
            Take the online presence
            <br /> of your business to the next level
          </TagLine>
          <Button
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
          </Button>
        </BannerText>
      </Banner>
    </Container>
  )
}
export default Banner
