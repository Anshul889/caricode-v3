import React from 'react'
import Lottie from 'react-lottie'
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


const Loyalty = () => {
  
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
      <Lottie options={defaultOptions} isStopped={false} />
    </Container>
  )
}

export default Loyalty
