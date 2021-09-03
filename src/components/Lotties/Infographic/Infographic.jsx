import React from 'react'
import Lottie from 'react-lottie'
import animationData from './bar-graph.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const InfographicLottie = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </div>
  )
}

export default InfographicLottie
