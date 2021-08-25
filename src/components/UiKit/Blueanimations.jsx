import React from 'react'
import Lottie from 'react-lottie'
import animationData from './blue-search.json'
import animationloadingData from './dark-loading.json'

const Blueanimations = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const defaultloadingOptions = {
    loop: true,
    autoplay: true,
    animationData: animationloadingData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={250}
        width={250}
        isStopped={false}
      />
      <Lottie
        options={defaultloadingOptions}
        height={250}
        width={250}
        isStopped={false}
      />
    </div>
  )
}

export default Blueanimations
