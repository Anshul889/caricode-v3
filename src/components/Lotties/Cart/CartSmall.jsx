import React from 'react'
import Lottie from 'react-lottie'
import animationData from './cart.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const CartSmall = () => {
  return (
    <div style={{height: '100px', width: '100px'}}>
      <Lottie
        options={defaultOptions}
        isStopped={false}
      />
    </div>
  )
}

export default CartSmall