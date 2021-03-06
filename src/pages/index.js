import { Link, navigate } from 'gatsby'
import * as React from 'react'
import Border from '../components/Border/Border'
import { Button } from '../components/Button/Button'
import Contact from '../components/Contact/Contact'
import Banner from '../components/Home/Banner'
import Layout from '../components/Layout/Layout'

import BookmarkSmall from '../components/Lotties/Bookmark/BookmarkSmall'

import BurgerSmall from '../components/Lotties/Burger/BurgerSmall'
import CartSmall from '../components/Lotties/Cart/CartSmall'
import NotificationSmall from '../components/Lotties/Notification/NotificationSmall'
import ResponsiveLottie from '../components/Lotties/Responsive/Responsive'
import SalesLottie from '../components/Lotties/Sales/SalesLottie'

import StarSmall from '../components/Lotties/Star/Starsmall'

import UpvoteSmall from '../components/Lotties/Upvote/UpvoteSmall'
import Seo from '../components/Seo/Seo'
import {
  Animation,
  Card,
  CardImage,
  CardText,
  IconAnimations,
  InnerStyles,
  Item,
  SalesAnimation,
  SectionThree,
  SectionThreeContainer,
  SectionTwo,
} from '../styles/index-style'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
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
            <p>Gold standard animations to suit your brand.</p>
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
              Create an amazing digital experience for your customers. 
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
              Digitally transform your enterprise.
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
              <Link to="/web-performance">
                <h4 style={{color: '#444'}}>Web Performance</h4>
              </Link>
              <Border />
              <p>
                Performance plays a significant role in the success of any
                online venture, as highly performing sites engage and retain
                users better than poorly performing ones.
              </p>
              <Button
                onClick={() => {
                  navigate('/web-performance/')
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
              <Link to="/multi-device-support">
                <h4 style={{color: '#444'}}>Multi Device Support</h4>
              </Link>
              <Border />
              <p>
                Screen sizes are always changing, so it's important that your
                site can adapt to any screen size, today or in the future.
              </p>
              <Button
                onClick={() => {
                  navigate('/multi-device-support/')
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
              <Link to="/base-technologies/">
                <h4 style={{color: '#444'}}>Base Technologies</h4>
              </Link>
              <Border />
              <p>
                Built with React JS, a scalable technology developed and
                maintained by Facebook. Used by all major technology firms,
                Uber, Twitter, Netlfix and Airbnb.
              </p>
              <Button
                onClick={() => {
                  navigate('/base-technologies/')
                }}
                secondary
              >
                Learn More
              </Button>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage
                onClick={() => {
                  navigate('/clean-design/')
                }}
                src="../images/image6.jpg"
              />
            </CardImage>
            <CardText>
              <Link to="/clean-design/">
                <h4 style={{color: '#444'}}>Clean Design</h4>
              </Link>
              <Border />
              <p>
                Mobile users are very goal-oriented. They expect to be able to
                get what they need, immediately, and on their own terms.
              </p>
              <Button
                onClick={() => {
                  navigate('/clean-design/')
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
              <Link to="/custom-functionality/">
                <h4 style={{color: '#444'}}>Custom Functionality</h4>
              </Link>
              <Border />
              <p>
                Custom Navigation for the Web and Mobile, Authentications, Blog,
                Offline support, Easily manage your content
              </p>
              <Button
                onClick={() => {
                  navigate('/custom-functionality/')
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
              <Link to="/progressive-web-apps/">
                <h4 style={{color: '#444'}}>Progressive Web Apps</h4>
              </Link>
              <Border />
              <p>
                A high-quality Progressive Web App has incredible benefits,
                making it easy to delight your users, grow engagement and
                increase conversions.
              </p>
              <Button
                onClick={() => {
                  navigate('/progressive-web-apps/')
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
