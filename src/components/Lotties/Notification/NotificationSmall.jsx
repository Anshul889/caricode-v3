import React from 'react'
import Lottie from 'react-lottie'
import { UxContainer } from '../../../styles/index-style'
import animationData from './notification.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const NotificationSmall = () => {
  return (
    <UxContainer>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </UxContainer>
  )
}

export default NotificationSmall