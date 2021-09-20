import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './bar-graph.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Container = styled.div`
 @media screen and (min-width: 768px) {
  height: 400px;
 }
`

const InfographicLottie = () => {
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </Container>
  )
}

export default InfographicLottie
