import React from 'react'
import Lottie from 'react-lottie'
import animationData from './responsive.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const ResponsiveLottie = () => {
  return (
    <div style={{height: '250px', transform: 'translateY(-20px)'}}>
      <Lottie
        options={defaultOptions}
        isStopped={false}
        height={250}
      />
    </div>
  )
}

export default ResponsiveLottie
