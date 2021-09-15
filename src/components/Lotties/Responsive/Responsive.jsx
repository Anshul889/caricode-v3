import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './responsive-alt.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Container = styled.div`
  height: 250px;
  transform: translateY(-20px);
  @media screen and (min-width: 768px) {
    transform: translateY(-40px);
  }
  @media screen and (min-width: 1024px) {
  transform: translateY(-20px);
  }
`

const ResponsiveLottie = () => {
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        isStopped={false}
        height={250}
      />
    </Container>
  )
}

export default ResponsiveLottie
