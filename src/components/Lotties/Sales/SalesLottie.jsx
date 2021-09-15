import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './sales.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Container = styled.div`
  transform: translateY(20px);
  @media screen and (min-width: 768px) {
    transform: translateY(10px);
  }
  @media screen and (min-width: 1024px) {
  transform: translateY(20px);
  }
`

const SalesLottie = () => {
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </Container>
  )
}

export default SalesLottie
