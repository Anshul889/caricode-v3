import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './failed.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Feedback = styled.div`
  width: 100%;
`

const Failed = () => {
  return (
    <Feedback>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        isStopped={false}
      />
    </Feedback>
  )
}

export default Failed
