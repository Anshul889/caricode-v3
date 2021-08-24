import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './5star.json'

const Container = styled.div`
  height: 120px;
`

const Referrals = () => {
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

export default Referrals
