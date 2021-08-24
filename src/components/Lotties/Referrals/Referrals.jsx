import React, {useState} from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './5star.json'
import VisibilitySensor from 'react-visibility-sensor'

const Container = styled.div`
  height: 120px;
`

const defaultOptions = {
  loop: true,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Referrals = () => {
  const [play, SetPlay] = useState(true)
  return (
    <Container>
      <VisibilitySensor
        offset={{
          bottom: 300,
          top: -100,
        }}
        onChange={() => SetPlay(!play)}
      >
        <Lottie options={defaultOptions} isStopped={play} />
      </VisibilitySensor>
    </Container>
  )
}

export default Referrals
