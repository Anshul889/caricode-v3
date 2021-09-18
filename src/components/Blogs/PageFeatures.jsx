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
            Delight users with Interactive blog pages which people are more
            likely to share.
            <ul>
              <li>
                {' '}
                Improve customer education. Use interactive content to share
                your story in new ways.{' '}
              </li>
              <li>Increase user engangment</li>
              <li>87% increase in engagment </li>
              <li>
                Visuals are processed 60000 times faster in the brain than text.
              </li>
              <li>
                A recent study by Oracle showed that businesses leveraging
                interactive content get on average 50% CTR and more than 80%
                form submission rate
              </li>
              <li>
                With interactive content you can set yourself apart and give
                your customers better value
              </li>
              <li>
                Interactive content allows for a more back and forth with your
                audience
              </li>
              <li>
                Google rewards sites that provide value through interactive
                content
              </li>
            </ul>
          </Description>
        </div>
        <InfographicLottie />
      </Features>
    </Container>
  )
}

export default PageFeatures
