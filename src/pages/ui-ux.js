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
import { Facebook } from 'react-content-loader'
import SEO from '../components/Seo/Seo'
import {
  Airbnb,
  Animation,
  BigItem,
  Brand,
  Desktop,
  Drag,
  Duolingo,
  Everywhere,
  EvwhInner,
  Feedback,
  FeedbackInner,
  Hierarchy,
  Icon,
  IconAnimations,
  IconsDiv,
  Illustrations,
  InnerStyles,
  ItemFour,
  ItemOne,
  ItemText,
  ItemThree,
  ItemTwo,
  Loader,
  MemorableDiv,
  Mobile,
  Olydiv,
  OneAnimation,
  Performance,
  Pinterest,
  Principle,
  Principles,
  PrinciplesHeading,
  Second,
  SecondHeader,
  Showcase,
  ShowcaseOne,
  ShowcaseTwo,
  SmallItem,
  SmallItemText,
  TwoAnimation,
} from '../styles/uiux-style'
import Failed from '../components/Lotties/Failed/Failed'
import Blur from '../components/Lotties/Blur/Blur'
import ReactLogo from '../components/Lotties/ReactLogo/ReactLogo'
import Bookmark from '../components/Lotties/Bookmark/Bookmark'
import Burger from '../components/Lotties/Burger/Burger'
import Upvote from '../components/Lotties/Upvote/Upvote'
import Star from '../components/Lotties/Star/Star'
import DFailed from '../components/Lotties/DFailed/DFailed'
import UiKit from '../components/UiKit/UiKit'
import { graphql, useStaticQuery } from 'gatsby'
import AirbnbLottie from '../components/Lotties/Airbnb/AirbnbLottie'
import DuoLingoLottie from '../components/Lotties/Duolingo/Duolingo'
import PinterestLottie from '../components/Lotties/Pinterest/Pinterest'
import LoaderLottie from '../components/Lotties/Loader/Loader'
import DragLottie from '../components/Lotties/Drag/Drag'

const getImages = graphql`
  {
    image1: file(relativePath: { eq: "duolingo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headspace: file(relativePath: { eq: "headspace.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    airbnb: file(relativePath: { eq: "airbnb.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const UiUx = () => {
  const data = useStaticQuery(getImages)
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
                  <Failed />
                  <h4>Feedback and status</h4>
                  <p>Ui animations make system errors more palatable.</p>
                </div>
                  <Drag>
                    <DragLottie />
                  </Drag>
                <div>
                  <p>
                    Motion of a card makes selection, positioning, and release
                    visible.
                  </p>
                  <Loader>
                    <LoaderLottie />
                  </Loader>
                  <p>
                    Animated list items are placeholders that convey content is
                    loading.
                  </p>
                </div>
                <div>
                  <Blur />
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
      <Desktop>
        <Second>
          <SecondHeader>
            <h2>Showcase</h2>
            <p>
              Here’s a selection a some of our coolest animations and motions
            </p>
            <ShowcaseOne>
              <ItemOne>
                <OneAnimation>
                  <TabMotion />
                </OneAnimation>
                <ItemText>
                  <h3>HIERARCHY</h3>
                  <p>
                    Motion helps orient users by showing how elements in a
                    transition are related. Motion indicates the hierarchical
                    relationship between “Caricode” and Alt Colors,” peer items
                    in the navigation
                  </p>
                </ItemText>
              </ItemOne>
              <ItemTwo>
                <TwoAnimation>
                  <ReactLogo />
                </TwoAnimation>
                <ItemText>
                  <h3>BRAND EXPRESSION</h3>
                  <p>
                    Motion is used to express a brand’s personality and style.
                    Need a few lines on animated logos.
                  </p>
                </ItemText>
              </ItemTwo>
            </ShowcaseOne>
            <ShowcaseTwo>
              <ItemThree>
                <IconAnimations>
                  <Bookmark />
                  <Burger />
                  <Upvote />
                  <Star />
                </IconAnimations>
                <ItemText>
                  <h3>Icons and Illustrations</h3>
                  <p>
                    Subtle animation in icons, illustrations, and product logos
                    can add polish and playfulness to the user experience.
                  </p>
                </ItemText>
              </ItemThree>
              <ItemFour>
                <OneAnimation>
                  <DFailed />
                </OneAnimation>
                <ItemText>
                  <h3>Feedback and Status</h3>
                  <p>Ui animations make system errors more palatable.</p>
                </ItemText>
              </ItemFour>
            </ShowcaseTwo>
          </SecondHeader>
        </Second>
      </Desktop>
      <Everywhere>
        <h2>Animations are everywhere</h2>
        <p>
          Big tech companies use animations to boost conversions and engage
          users with powerful motion design experiences.
        </p>
        <EvwhInner>
          <BigItem>
            <Airbnb>
              <AirbnbLottie />
              <h3>Airbnb</h3>
            </Airbnb>
          </BigItem>
          <SmallItem>
            <Duolingo>
              <DuoLingoLottie />
            </Duolingo>
          </SmallItem>
          <SmallItemText>
            “By leveraging animations, we can provide a whole experience.
            Animations help us keep users engaged, delighted, and always
            learning.”
          </SmallItemText>
          <SmallItem>
            <Pinterest>
              <PinterestLottie />
            </Pinterest>
          </SmallItem>
          <SmallItemText>
            “Embracing animations allows me to deepen otherwise static graphics
            into moments of joy.”
          </SmallItemText>
        </EvwhInner>
      </Everywhere>
      <UiKit />
    </Layout>
  )
}

export default UiUx
