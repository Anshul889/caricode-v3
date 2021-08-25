import React from 'react'
import Lottie from 'react-lottie'
import animationData from './bookmark.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Bookmark = () => {
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

export default Bookmark
