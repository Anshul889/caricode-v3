import React from 'react'
import Lottie from 'react-lottie'
import { UxContainer } from '../../../styles/index-style'
import animationData from './bookmark.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}


const BookmarkSmall = () => {
  return (
    <UxContainer>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </UxContainer>
  )
}

export default BookmarkSmall