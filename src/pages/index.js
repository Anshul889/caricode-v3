import * as React from 'react'
import { Button } from '../components/Button/Button'
import Contact from '../components/Contact/Contact'
import Banner from '../components/Home/Banner'
import Layout from '../components/Layout/Layout'
import Bookmark from '../components/Lotties/Bookmark/Bookmark'
import BookmarkSmall from '../components/Lotties/Bookmark/BookmarkSmall'
import Burger from '../components/Lotties/Burger/Burger'
import BurgerSmall from '../components/Lotties/Burger/BurgerSmall'
import CartSmall from '../components/Lotties/Cart/CartSmall'
import NotificationSmall from '../components/Lotties/Notification/NotificationSmall'
import ResponsiveLottie from '../components/Lotties/Responsive/Responsive'
import SalesLottie from '../components/Lotties/Sales/SalesLottie'
import Star from '../components/Lotties/Star/Star'
import StarSmall from '../components/Lotties/Star/Starsmall'
import Upvote from '../components/Lotties/Upvote/Upvote'
import UpvoteSmall from '../components/Lotties/Upvote/UpvoteSmall'
import SEO from '../components/Seo/Seo'
import {
  Animation,
  IconAnimations,
  InnerStyles,
  Item,
  Learn,
  SalesAnimation,
  SectionTwo,
} from '../styles/index-style'

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Banner />
      <SectionTwo>
        <InnerStyles>
          <Item>
            <IconAnimations>
              <BookmarkSmall />
              <BurgerSmall />
              <CartSmall />
              <UpvoteSmall />
              <StarSmall />
              <NotificationSmall />
            </IconAnimations>
            <h4>User Experience</h4>
            <p>Gold standard animations to suit your brand</p>
            <Button secondary style={{ width: '200px', margin: '0 auto' }}>
              Learn More
            </Button>
          </Item>
          <Item>
            <Animation>
              <ResponsiveLottie />
            </Animation>
            <h4>Web Applications</h4>
            <p>
              Create amazing experiences for the web in record time—without
              thinking once about servers or devops.
            </p>
            <Button secondary style={{ width: '200px', margin: '0 auto' }}>
              Learn More
            </Button>
          </Item>
          <Item>
            <SalesAnimation>
              <SalesLottie />
            </SalesAnimation>
            <h4>Ecommerce</h4>
            <p>
              We build ecommerce apps that deliver an amazing experience to your
              customers. Our apps are backed by robust, scalable technology to
              deliver customer engagement and return on your investment
            </p>
            <Button secondary style={{ width: '200px', margin: '0 auto' }}>
              Learn More
            </Button>
          </Item>
        </InnerStyles>
      </SectionTwo>
      <Contact />
    </Layout>
  )
}

export default IndexPage
