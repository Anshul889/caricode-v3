import React from 'react'
import InfographicLottie from '../Lotties/Infographic/Infographic'
import { Container, Description, Features } from './style'

const PageFeatures = () => {
  return (
    <Container>
      <Features>
        <div>
          <h2>interactive and dynamic blog pages</h2>
          <Description>
            Delight users with Interactive blog pages. Nobody will share bland
            pages
          </Description>
        </div>
        <InfographicLottie />
      </Features>
    </Container>
  )
}

export default PageFeatures
