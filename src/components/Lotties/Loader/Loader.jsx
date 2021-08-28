import React from 'react'
import Lottie from 'react-lottie'
import animationData from './list-loader.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const LoaderLottie = () => {
  return (
    <div>
      <Lottie options={defaultOptions} isStopped={false} />
      <Lottie options={defaultOptions} isStopped={false} />
    </div>
  )
}

export default LoaderLottie
