import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import animationData from './spinner.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1200px ;
  margin: 0 auto ;
`

const Spinner = () => {
  return (
    <Wrapper>
      <div>
        <Lottie
          options={defaultOptions}
          height={40}
          width={40}
          isStopped={false}
        />
      </div>
    </Wrapper>
  )
}

export default Spinner
