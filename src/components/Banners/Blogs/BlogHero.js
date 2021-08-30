import React from 'react'
import {
  dhero,
  dinner,
  dashboard,
  mhero,
  manimation,
} from '../../../styles/blogs.module.css'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/Dashboard/dashboard.json'

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
      <div className={dhero}>
        <div className={dinner}>
          <div>
            <h1>
              Want more traffic
              <br /> to your website ?
            </h1>
            <p>
              LottieFiles provides all the tools that you need to create, edit,
              test and display Lottie animations.
            </p>
          </div>
          <div className={dashboard}>
            <Lottie options={defaultOptions} isStopped={false} />
          </div>
        </div>
      </div>
      <div className={mhero}>
        <h1>Want more traffic to your website ?</h1>

        <div className={manimation}>
          <Lottie options={defaultOptions} isStopped={false} />
        </div>
      </div>
    </div>
  )
}

export default BlogHero
