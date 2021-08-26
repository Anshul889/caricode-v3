import React from 'react'
import Lottie from 'react-lottie'
import animationData from './pinterest.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const PinterestLottie = () => {
  return (
    <div style={{height: '225px', overflow: 'hidden'}}>
      <Lottie
        options={defaultOptions}
        width={300}
        isStopped={false}
      />
    </div>
  )
}

export default PinterestLottie
