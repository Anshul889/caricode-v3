import React from 'react'
import Lottie from 'react-lottie'
import animationData from './star.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const StarSmall = () => {
  return (
    <div style={{height: '100px', widht: '100px'}}>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </div>
  )
}

export default StarSmall
