import { navigate } from 'gatsby'
import * as React from 'react'
import Border from '../components/Border/Border'
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
  Card,
  CardImage,
  CardText,
  IconAnimations,
  InnerStyles,
  Item,
  Learn,
  SalesAnimation,
  SectionThree,
  SectionThreeContainer,
  SectionTwo,
} from '../styles/index-style'
import { StaticImage } from 'gatsby-plugin-image'

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
            <Button
              onClick={() => {
                navigate('/ui-ux/')
              }}
              secondary
            >
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
            <Button
              onClick={() => {
                navigate('/web-applications/')
              }}
              secondary
            >
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
            <Button
              onClick={() => {
                navigate('/ecommerce/')
              }}
              secondary
            >
              Learn More
            </Button>
          </Item>
        </InnerStyles>
      </SectionTwo>
      <SectionThreeContainer>
        <h3>Critical Features for a successful web application</h3>
        <div style={{ width: '90%', margin: '0 auto', maxWidth: '1200px' }}>
          <Border />
        </div>
        <SectionThree>
          <Card>
            <CardImage>
              <StaticImage src="../images/image3.jpg" />
            </CardImage>
            <CardText>
              <h4>Web Performance</h4>
              <Border />
              <p>
                Performance plays a significant role in the success of any
                online venture, as highly performing sites engage and retain
                users better than poorly performing ones.
              </p>
              <Button
                onClick={() => {
                  navigate('/ui-ux/')
                }}
                secondary
              >
                Learn More
              </Button>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image4.jpg" />
            </CardImage>
            <CardText>
              <h4>Multi Device Support</h4>
              <Border />
              <p>
                Screen sizes are always changing, so it's important that your
                site can adapt to any screen size, today or in the future.
              </p>
              <Button
                onClick={() => {
                  navigate('/ui-ux/')
                }}
                secondary
              >
                Learn More
              </Button>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image5.jpg" />
            </CardImage>
            <CardText>
              <h4>Base Technologies</h4>
              <Border />
              <p>
                Built with React JS, a scalable technology developed and
                maintained by Facebook. Used by all major technology firms,
                Uber, Twitter, Netlfix and Airbnb.
              </p>
              <Button
                onClick={() => {
                  navigate('/ui-ux/')
                }}
                secondary
              >
                Learn More
              </Button>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image6.jpg" />
            </CardImage>
            <CardText>
              <h4>Clean Design</h4>
              <Border />
              <p>
                Mobile users are very goal-oriented. They expect to be able to
                get what they need, immediately, and on their own terms.
              </p>
              <Button
                onClick={() => {
                  navigate('/ui-ux/')
                }}
                secondary
              >
                Learn More
              </Button>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image7.jpg" />
            </CardImage>
            <CardText>
              <h4>Custom Functionality</h4>
              <Border />
              <p>
                Custom Navigation for the Web and Mobile, Authentications, Blog,
                Offline support, Easily manage your content
              </p>
              <Button
                onClick={() => {
                  navigate('/ui-ux/')
                }}
                secondary
              >
                Learn More
              </Button>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image8.jpg" />
            </CardImage>
            <CardText>
              <h4>Progressive Web Apps</h4>
              <Border />
              <p>
                A high-quality Progressive Web App has incredible benefits,
                making it easy to delight your users, grow engagement and
                increase conversions.
              </p>
              <Button
                onClick={() => {
                  navigate('/ui-ux/')
                }}
                secondary
              >
                Learn More
              </Button>
            </CardText>
          </Card>
        </SectionThree>
      </SectionThreeContainer>
      <Contact />
    </Layout>
  )
}

export default IndexPage
