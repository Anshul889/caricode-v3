import React from 'react'
import Lottie from 'react-lottie'
import animationData from './drag-and-drop.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const DragLottie = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </div>
  )
}

export default DragLottie
