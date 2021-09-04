import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'
import {
  Container,
  Content,
  FirstItem,
  Heading,
  Inner,
  Rec,
  Recommended,
  SecondItem,
} from '../styles/page-style'
import { FlexibleWidthXYPlot, XAxis, YAxis, LineMarkSeries } from 'react-vis'
import LoadingSpeed from '../components/LoadingSpeed/LoadingSpeed'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const databounce = [
  { x: 0, y: 0 },
  { x: 3, y: 32 },
  { x: 5, y: 90 },
  { x: 6, y: 106 },
  { x: 10, y: 123 },
]

const WebPerformance = () => {
  return (
    <Layout>
      <Seo
        title={'Web Performance'}
        description="Performance plays a significant role in the
        success of any online venture, as high performing sites engage and
        retain users better than poorly performing ones."
        pathname="/web-performance"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <Container>
        <Inner>
          <Content>
            <Heading>Web Performance</Heading>
            <p>
              At CariCode we believe web performance is crucial for your
              business and fundamental to good user experience. It is crucial
              that your sites user experience is fast and responsive to users.
              Performance is critical for users accessing your site using their
              mobile device. Mobile users make up a large portion of global
              internet users. Many of these users access the web over varying
              networks.
            </p>
            <p>
              <LoadingSpeed />
            </p>
            <p>
              Performance is one of the key challenges faced by most businesses
              on the web. Websites and apps are richer in functionality than
              ever before. As a result, they've become more demanding of network
              and device resources. Businesses need to achieve a high level of
              performance on their websites across a variety of network
              conditions and devices.
            </p>
            <p>
              Performance issues range from small issues like slow sites and
              applications with slight delays that hinder users for only brief
              moments to completely inaccessible websites.
            </p>
            <h4>Web Performance is key in retaining users</h4>
            <p>
              At Caricode we want your users to interact meaningfully with what
              we build for you. Performance plays a significant role in the
              success of any online venture, as high performing sites engage and
              retain users better than poorly performing ones.
            </p>
            <p>
              <FlexibleWidthXYPlot
                margin={{ left: 60, right: 30 }}
                height={300}
              >
                <XAxis title={'loading time(s)'} />
                <YAxis title={'%increase in Bounce Rate'} />
                <LineMarkSeries
                  animation={{ damping: 20, stiffness: 40 }}
                  curve={'curveMonotoneX'}
                  data={databounce}
                />
              </FlexibleWidthXYPlot>
            </p>
          </Content>
          <Recommended>
            <Rec>
              <FirstItem>
                <Link to="/multi-device-support">
                  <StaticImage src="../images/image4.jpg" />
                </Link>
                <h3>
                  <Link to="/multi-device-support">Multi Device Support</Link>
                </h3>
                <p>
                  Our responsive designs work behind-the-scenes to give a user a
                  seamless experience no matter what device they choose.
                </p>
              </FirstItem>
              <SecondItem>
                <Link to="/base-technologies">
                  <StaticImage src="../images/image5.jpg" />
                </Link>
                <h3>
                  <Link to="/base-technologies">Base Technologies</Link>
                </h3>
                <p>
                  At CariCode, we build all our web applications with React JS,
                  a scalable technology developed and maintained by Facebook.
                </p>
              </SecondItem>
            </Rec>
          </Recommended>
        </Inner>
      </Container>
    </Layout>
  )
}

export default WebPerformance
