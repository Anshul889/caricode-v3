import React from 'react'
import UiuxBanner from '../components/Banners/UI-UX/UiuxBanner'
import Layout from '../components/Layout/Layout'
import Branding from '../components/Lotties/Branding/Branding'
import Memorable from '../components/Lotties/Memorable/Memorable'
import Expressive from '../components/Lotties/Expressive/Expressive'
import Focused from '../components/Lotties/Focused/Focused'
import Icons from '../components/Lotties/Icons/Icons'
import Informative from '../components/Lotties/Informative/Informative'
import Olympics from '../components/Lotties/Olympics/Olympics'
import TabMotion from '../components/Lotties/TabMotion/TabMotion'
import SEO from '../components/Seo/Seo'
import {
  Animation,
  Brand,
  Feedback,
  FeedbackInner,
  Hierarchy,
  Icon,
  IconsDiv,
  Illustrations,
  InnerStyles,
  MemorableDiv,
  Mobile,
  Olydiv,
  Performance,
  Principle,
  Principles,
  PrinciplesHeading,
  Showcase,
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
              Motion focuses attention on what's important, without creating
              unnecessary distraction.
            </p>
          </Principle>
          <Principle>
            <Animation>
              <Expressive />
            </Animation>
            <h4>Expressive</h4>
            <p>
              Motion celebrates moments in user journeys, adds character to
              common interactions, and can express a brand’s style.
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
        <Olydiv>
          <Olympics />
        </Olydiv>
      </Performance>
      <Mobile>
        <Showcase>
          <InnerStyles>
            <h2>Showcase</h2>
            <Hierarchy>
            <TabMotion />
              <h4>Hierarchy</h4>
              <p>
                Motion helps orient users by showing how elements in a
                transition are related. Motion indicates the hierarchical
                relationship between “Caricode” and Alt Colors,” peer items in
                the navigation
              </p>
            </Hierarchy>
            <Brand>
            <Branding />
              <h4>Brand Expression</h4>
              <p>Motion is used to express a brand’s personality and style.</p>
            </Brand>
            <IconsDiv>
              <Illustrations>
                <Icon>
                  <Icons />
                  <h4>Icons and Illustrations</h4>
                  <p>
                    Subtle animation in icons, illustrations, and product logos
                    can add polish and playfulness to the user experience.
                  </p>
                </Icon>
                <MemorableDiv>
                  <Memorable />
                  <p>
                    Motion can be used to emphasize key points in a user
                    journey. An animation to reward the user for a task can make
                    key moments in the user journey more memorable.
                  </p>
                </MemorableDiv>
              </Illustrations>
            </IconsDiv>
            <Feedback>
              <FeedbackInner>
                <div>
                  <h4>Feedback and status</h4>
                  <p>Ui animations make system errors more palatable.</p>
                </div>
                <div>
                  <p>
                    Motion provides timely feedback and indicates the status of
                    user or system actions.
                  </p>
                  <p>
                    Animated list items are placeholders that convey content is
                    loading.
                  </p>
                </div>
                <div>
                  <p>
                    Efficiently load images to speed up the initial load and
                    save bandwidth. Hold the image position so your page doesn’t
                    jump while the images load
                  </p>
                </div>
              </FeedbackInner>
            </Feedback>
          </InnerStyles>
        </Showcase>
      </Mobile>
    </Layout>
  )
}

export default UiUx
