import React from 'react'
import Lottie from 'react-lottie'
import { UxContainer } from '../../../styles/index-style'
import animationData from './upvote.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const UpvoteSmall = () => {
  return (
    <UxContainer>
      <Lottie options={defaultOptions} isStopped={false} speed={0.75} />
    </UxContainer>
  )
}

export default UpvoteSmall
