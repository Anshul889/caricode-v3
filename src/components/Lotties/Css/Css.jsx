import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './css.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Container = styled.div`
  overflow: hidden;
  height: 200px;
`

const Css = () => {
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </Container>
  )
}

export default Css
