import React from 'react'
import UiuxBanner from '../components/Banners/UI-UX/UiuxBanner'
import Layout from '../components/Layout/Layout'
import Expressive from '../components/Lotties/Expressive/Expressive'
import Focused from '../components/Lotties/Focused/Focused'
import Informative from '../components/Lotties/Informative/Informative'
import SEO from '../components/Seo/Seo'
import {
  Animation,
  Mobile,
  Performance,
  Principle,
  Principles,
  PrinciplesHeading,
} from '../styles/uiux-style'

const UiUx = () => {
  return (
    <Layout>
      <SEO
        title={'Blog Development and Best SEO practices'}
        description="At CariCode, we build blazing fast blogs to delight and retain users."
        pathname="/blogs/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <UiuxBanner />
      <PrinciplesHeading>
        <h2>Principles</h2>
        <p>
          {' '}
          It is critical that Motion Design follows three important principles:{' '}
        </p>
        <Principles>
          <Principle>
            <Animation>
              <Informative />
            </Animation>
            <h4>Informative</h4>
            <p>
              Motion design informs users by highlighting relationships between
              elements, action availability, and action outcomes.
            </p>
          </Principle>
          <Principle>
            <Animation>
              <Focused />
            </Animation>
            <h4>Focused</h4>
            <p>
              Motion design informs users by highlighting relationships between
              elements, action availability, and action outcomes.
            </p>
          </Principle>
          <Principle>
            <Animation>
              <Expressive />
            </Animation>
            <h4>Expressive</h4>
            <p>
              Motion design informs users by highlighting relationships between
              elements, action availability, and action outcomes.
            </p>
          </Principle>
        </Principles>
      </PrinciplesHeading>
      <Performance>
        <h2>Extraordinary performance, epic integrations</h2>
        <p>
          You can go forward, backward, and most importantly you can program
          your animation to respond to any interaction.
        </p>
      </Performance>
    </Layout>
  )
}

export default UiUx
