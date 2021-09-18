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
              Blogs are critical to drive traffic, promote your product and services and build trust with your potential customers.
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
