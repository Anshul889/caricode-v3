import React from 'react'
import Lottie from 'react-lottie'
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
    <div style={{ height: '100px', widht: '100px' }}>
      <Lottie options={defaultOptions} isStopped={false} speed={0.75} />
    </div>
  )
}

export default UpvoteSmall
