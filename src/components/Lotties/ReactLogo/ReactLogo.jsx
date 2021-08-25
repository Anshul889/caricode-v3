import React from 'react'
import Lottie from 'react-lottie'
import animationData from './react-logo.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const ReactLogo = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isStopped={false}
      />
    </div>
  )
}

export default ReactLogo
