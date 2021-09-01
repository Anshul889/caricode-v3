import React from 'react'
import Lottie from 'react-lottie'
import { UxContainer } from '../../../styles/index-style'
import animationData from './star.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const StarSmall = () => {
  return (
    <UxContainer>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </UxContainer>
  )
}

export default StarSmall
