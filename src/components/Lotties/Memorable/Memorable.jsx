import React, { useEffect, useState } from 'react'
import * as styles from './Memorable.module.css'
import Lottie from 'react-lottie'
import animationData from './confetti.json'
import { Button } from '../../Button/Button'
import styled from 'styled-components'

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const AnimatedButton = styled(Button)`
  animation: press 10s linear infinite forwards;
  @keyframes press {
    0% {
      opacity: 1;
      background-color: #7c759a;
    }

    15% {
      background-color: #7c759a;
    }
    16% {
      background-color: #5a556f;
    }

    17% {
      background-color: #7c759a;
    }

    19% {
      opacity: 1;
    }

    20% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      background-color: #7c759a;
    }
  }

  @keyframes spin {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }

    20% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    51% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`

const Memorable = () => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const one = setTimeout(() => {
      setStart(true)
    }, 15500)
    const two = setTimeout(() => setStart(false), 16600)
    const three = setTimeout(() => {
      setStart(true)
    }, 25500)
    const four = setTimeout(() => setStart(false), 31600)
    const five = setTimeout(() => {
      setStart(true)
    }, 35500)
    const six = setTimeout(() => setStart(false), 40600)
    const seven = setTimeout(() => {
      setStart(true)
    }, 45500)
    const eight = setTimeout(() => setStart(false), 46600)
    return () => clearTimeout(one)
  }, [])

  return (
    <div className={styles.memorable}>
      <div className={styles.spinner}>
        <div class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
      </div>
      <div className={styles.payment}>Processing Payment</div>
      <div className={styles.complete}>Payment Complete!</div>

      <div className={styles.outer}>
        <AnimatedButton className={styles.animatedbutton}>Confirm Order</AnimatedButton>
      </div>
      <div className={styles.confetti}>
        <Lottie
          options={defaultOptions}
          height={200}
          width={300}
          isStopped={!start}
        />
      </div>
    </div>
  )
}

export default Memorable
