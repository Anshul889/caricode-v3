import React from 'react'
import SEO from '../components/Seo/Seo'
import { Heading2 } from '../components/Contact/style'
import Layout from '../components/Layout/Layout'
import { Principles, PrinciplesHeading } from '../styles/uiux-style'
import { ImageContainer, People, Person, Story } from '../styles/about-us'
import { StaticImage } from 'gatsby-plugin-image'

const AboutUs = () => {
  return (
    <Layout>
      <SEO
        title={'About Us'}
        description="At CariCode, we build blazing fast web applications to delight and retain users."
        pathname="/about-us/"
        image="/images/image4.jpg"
        date={'2023-01-30'}
      />
      <div>
        <Story>
          <h2>Our Story</h2>
        </Story>
        <PrinciplesHeading>
          <h2>Our Team</h2>
          <People>
            <Person>
              <ImageContainer>
                <StaticImage
                  src="../images/full.jpg"
                  style={{ borderRadius: '50%' }}
                />
              </ImageContainer>
              <h4>Anshul Manaktala</h4>
              <h4>Full Stack Engineer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </Person>
            <Person>
              <ImageContainer>
                <StaticImage
                  src="../images/uiux.jpg"
                  style={{ borderRadius: '50%' }}
                />
              </ImageContainer>
              <h4>Isha Sahota</h4>
              <h4>UI/UX Expert</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </Person>
            <Person>
            <ImageContainer>
                <StaticImage
                  src="../images/backend.jpg"
                  style={{ borderRadius: '50%' }}
                />
              </ImageContainer>
              <h4>Nitin Mander</h4>
              <h4>Backend Engineer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </Person>
            <Person>
            <ImageContainer>
                <StaticImage
                  src="../images/database.jpg"
                  style={{ borderRadius: '50%' }}
                />
              </ImageContainer>
              <h4>Atul Bahri</h4>
              <h4>Database Engineer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </Person>
          </People>
        </PrinciplesHeading>
      </div>
    </Layout>
  )
}

export default AboutUs
