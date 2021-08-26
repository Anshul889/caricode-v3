import React from 'react'
import Lottie from 'react-lottie'
import animationData from './duolingo.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const DuoLingoLottie = () => {
  return (
    <div style={{borderRadius: '10px', overflow: 'hidden'}}>
      <Lottie
        options={defaultOptions}
        height={225}
        isStopped={false}
      />
    </div>
  )
}

export default DuoLingoLottie
