import React from 'react'
import Lottie from 'react-lottie'
import animationData from './dfailed.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const DFailed = () => {
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

export default DFailed
