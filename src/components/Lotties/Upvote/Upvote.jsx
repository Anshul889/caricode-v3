import React from 'react'
import Lottie from 'react-lottie'
import animationData from './upvote.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Upvote = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        isStopped={false}
        speed={0.75}
      />
    </div>
  )
}

export default Upvote
