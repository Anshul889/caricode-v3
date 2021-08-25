import React from 'react'
import Lottie from 'react-lottie'
import animationData from './burger.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Burger = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        isStopped={false}
      />
    </div>
  )
}

export default Burger
