import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo/Seo'
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
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  LineMarkSeries,
  RadialChart,
} from 'react-vis'
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

const MultiDeviceSupport = () => {
  const [myData, setData] = useState([
    { angle: 1.3, label: 'Mobile' },
    { angle: 1.3, label: 'Desktop' },
    { angle: 0.5, label: 'Tablet' },
  ])
  useEffect(() => {
    setTimeout(
      () =>
        setData([
          { angle: 5.1, label: 'Mobile' },
          { angle: 4.7, label: 'Desktop' },
          { angle: 0.2, label: 'Tablet' },
        ]),
      300
    )
  })
  return (
    <Layout>
      <SEO
        title={'Multi Device Support'}
        description="At CariCode we develop your website so it can be accessed seamlessly
       across different devices: phones, phablets, tablets,
       laptops, desktops, and more."
        pathname="/multi-device-support"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <Container>
        <Inner>
          <Content>
            <Heading>Multi Device Support</Heading>
            <div
              style={{
                margin: '0 auto',
                maxWidth: '300px',
                textAlign: 'center',
              }}
            >
              <RadialChart
                data={myData}
                width={300}
                height={300}
                animation={{ damping: 20, stiffness: 120 }}
                showLabels
              />
              <p style={{ fontSize: '12px', marginTop: '5px' }}>
                Web usage across devices
              </p>
            </div>
            <p>
              At Caricode we offer multi-device support for your website. Users
              are increasingly accessing the web through their mobile, however
              most of the web isn’t optimized for mobile devices. Mobile devices
              are often constrained by display size and require a different
              approach to how content is laid out on the screen.
            </p>
            <p>
              At CariCode we develop your website so it can be accessed
              seamlessly across different devices: phones, phablets, tablets,
              laptops, desktops, and more. Screen sizes are always changing, so
              its important to us that your site can adapt to any screen size,
              today or in the future.
            </p>

            {/* image of phone and laptop */}
            <p>
              All our web applications are built using Responsive web design.
              Originally defined by Ethan Marcotte in A List Apart, Responsive
              web design responds to the needs of the users and the devices
              theyre using. The layout changes based on the size and
              capabilities of the device. For example, on a phone users would
              see content shown in a single column view; a tablet might show the
              same content in two columns.
            </p>
            <p>
              We ensure your website is optimised across all devices. Our
              responsive designs work behind-the-scenes to give a user a
              seamless experience no matter what device they choose.
            </p>
          </Content>
          <Recommended>
            <Rec>
              <FirstItem>
                <Link to="/multi-device-support">
                  <StaticImage src="../images/image5.jpg" />
                </Link>
                <h3>
                  <Link to="/multi-device-support">Base Technologies</Link>
                </h3>
                <p>
                  At CariCode, we build all our web applications with React JS,
                  a scalable technology developed and maintained by Facebook.
                </p>
              </FirstItem>
              <SecondItem>
                <Link to="/base-technologies">
                  <StaticImage src="../images/image6.jpg" />
                </Link>
                <h3>
                  <Link to="/base-technologies">Clean Design</Link>
                </h3>
                <p>
                  Mobile users are very goal-oriented. They expect to be able to
                  get what they need, immediately, and on their own terms.
                </p>
              </SecondItem>
            </Rec>
          </Recommended>
        </Inner>
      </Container>
    </Layout>
  )
}

export default MultiDeviceSupport
