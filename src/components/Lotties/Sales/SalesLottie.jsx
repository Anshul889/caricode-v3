import React from 'react'
import Lottie from 'react-lottie'
import animationData from './sales.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const SalesLottie = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </div>
  )
}

export default SalesLottie
