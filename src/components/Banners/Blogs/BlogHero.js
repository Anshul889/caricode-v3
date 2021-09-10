import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {
  Dashboard,
  DContainer,
  DHero,
  HeroText,
  MAnimation,
  MHero,
} from './style'

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
            <StaticImage src="./blog.jpg" />
          </Dashboard>
        </DHero>
      </DContainer>
      <MHero>
        <h1>Want more traffic to your website ?</h1>
        <MAnimation>
          <StaticImage src="./blog.jpg" />
        </MAnimation>
      </MHero>
    </div>
  )
}

export default BlogHero
