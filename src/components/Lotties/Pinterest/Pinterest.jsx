import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './pinterest.json'

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
    height: 180px
  }

  @media screen and (min-width: 1024px) {
    height: 225px;
    overflow: hidden;
  }
`

const PinterestLottie = () => {
  return (
    <Container>
      <Lottie options={defaultOptions} isStopped={false} />
    </Container>
  )
}

export default PinterestLottie
