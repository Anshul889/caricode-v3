import React from 'react'
import {
  dinner,
  dashboard,
  mhero,
  manimation,
} from '../../../styles/blogs.module.css'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/Dashboard/dashboard.json'
import { Dashboard, DContainer, DHero, HeroText, MAnimation, MHero } from './style'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const BlogHero = () => {
  return (
    <div>
      <DContainer>
        <DHero>
          <HeroText>
            <h1>
              Want more traffic
              <br /> to your website ?
            </h1>
            <p>
              LottieFiles provides all the tools that you need to create, edit,
              test and display Lottie animations.
            </p>
          </HeroText>
          <Dashboard>
            <Lottie options={defaultOptions} isStopped={false} />
          </Dashboard>
        </DHero>
      </DContainer>
      <MHero>
        <h1>Want more traffic to your website ?</h1>

        <MAnimation>
          <Lottie options={defaultOptions} isStopped={false} />
        </MAnimation>
      </MHero>
    </div>
  )
}

export default BlogHero
