import React, { useState } from 'react'
import Lottie from 'react-lottie'
import VisibilitySensor from 'react-visibility-sensor'
import animationData from './olympics.json'
import { Animation, Controls, PlayButton, Reverse, Speed } from './style'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Olympics = () => {
  const [pause, setPause] = useState(false)
  const [animationSpeed, setSpeed] = useState(1)

  return (
    <Animation>
      <VisibilitySensor offset={{bottom: -50, top: -100}} onChange={() => setPause(!pause)}>
        <Lottie
          options={defaultOptions}
          width={'90%'}
          height={'90%'}
          isStopped={false}
          isPaused={pause}
          speed={animationSpeed}
        />
      </VisibilitySensor>
      <Controls>
        {!pause && (
          <PlayButton onClick={() => setPause(true)}>Pause</PlayButton>
        )}
        {pause && <PlayButton onClick={() => setPause(false)}>Play</PlayButton>}
        {animationSpeed >= 0 && (
          <Reverse onClick={() => setSpeed(-1 * animationSpeed)}>
            Reverse
          </Reverse>
        )}
        {animationSpeed < 0 && (
          <Reverse onClick={() => setSpeed(-1 * animationSpeed)}>
            Forward
          </Reverse>
        )}
        <Speed>
          <span> Speed </span>
          <div style={{  width: '27px', display: 'inline-block', textAlign: 'center'}}
            onClick={() => setSpeed(animationSpeed - 0.5)}
          >
            -
          </div>
          <div style={{  width: '20px', display: 'inline-block', textAlign: 'center'}}>{animationSpeed}</div>
          <div style={{  width: '27px', display: 'inline-block', textAlign: 'center'}}
            onClick={() => setSpeed(animationSpeed + 0.5)}
          >
            +
          </div>
        </Speed>
      </Controls>
    </Animation>
  )
}

export default Olympics
