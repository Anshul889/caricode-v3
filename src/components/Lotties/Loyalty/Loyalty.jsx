import React, { useState } from 'react'
import Lottie from 'react-lottie'
import VisibilitySensor from 'react-visibility-sensor'
import styled from 'styled-components'
import animationData from './loyalty.json'

const Container = styled.div`
  height: auto;
  @media screen and (min-width: 600px) {
    .main {
      height: 150px;
    }
  }
`

const defaultOptions = {
  loop: true,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Loyalty = () => {
  const [play, SetPlay] = useState(false)
  return (
    <Container>
      <VisibilitySensor
        offset={{
          bottom: 300,
          top: -100
        }}
        onChange={() => SetPlay(!play)}
      >
        <Lottie options={defaultOptions} isStopped={play} />
      </VisibilitySensor>
    </Container>
  )
}

export default Loyalty
