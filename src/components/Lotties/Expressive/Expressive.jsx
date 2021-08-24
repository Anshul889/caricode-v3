import React from 'react'
import animationData from './message.json'
import Lottie from 'react-lottie'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Expressive = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
      />
    </div>
  )
}

export default Expressive
