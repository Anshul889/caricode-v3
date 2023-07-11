import React from 'react'
import InfographicLottie from '../Lotties/Infographic/Infographic'
import { Container, Description, Features } from './style'

const PageFeatures = () => {
  return (
    <Container>
      <h2 id="interactiveweb">Interactive and dynamic web pages</h2>
      <Features>
        <InfographicLottie />
        <Description>
          Delight users with interactive web pages which people are more likely
          to share.
          <ul>
            <li>
              {' '}
              Improve customer education. Use interactive content to share your
              story in new ways. Drive increase in engagement.{' '}
            </li>
            <li>
              Visuals are processed 60000 times faster in the brain than text.
            </li>
            <li>
              With interactive content you can set yourself apart and give your
              customers better value
            </li>
            <li>
              Google rewards sites that provide value through interactive
              content
            </li>
          </ul>
        </Description>
      </Features>
    </Container>
  )
}

export default PageFeatures
