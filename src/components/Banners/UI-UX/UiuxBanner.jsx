import React from 'react'
import Lottie from 'react-lottie'
import animationData from './ui.json'
import animationDatam from './mui.json'
import { DAnim, Desktop, HeroText } from './uiux-style'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const defaultOptionsm = {
  loop: true,
  autoplay: true,
  animationData: animationDatam,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const UiuxBanner = () => {
  return (
    <div>
      <Desktop>
        <HeroText>
          <h1>User Interface brought to life with motion</h1>
          <p>We'll bring cool and trendy animations to your website</p>
        </HeroText>
        <DAnim>
          <Lottie
            options={defaultOptions}
            height={650}
            width={750}
            isStopped={false}
          />
        </DAnim>
      </Desktop>
    </div>
  )
}

export default UiuxBanner
