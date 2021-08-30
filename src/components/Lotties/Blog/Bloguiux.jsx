import React from 'react'
import Lottie from 'react-lottie'
import animationData from './ui-animation.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Bloguiux = () => {
  return (
    <div>
      <Lottie options={defaultOptions} isStopped={false} />
    </div>
  )
}

export default Bloguiux
