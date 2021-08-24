import React from 'react'
import Layout from '../components/Layout/Layout'
import sg from '../images/sg.png'
import { useStaticQuery, graphql, Link } from 'gatsby'
import 'react-vis/dist/style.css'
import Image from 'gatsby-image'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring, config } from 'react-spring/renderprops'
import {
  HorizontalBarSeries,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
  LineSeries,
  DiscreteColorLegend,
} from 'react-vis'
import SEO from '../components/Seo/Seo'
import {
  Container,
  CostEfectiveH,
  CostEffectiveP,
  FirstHeader,
  FirstHeaderHeading,
  Inner,
  InnerStyles,
  LoyaltyAnimation,
  LoyaltyH,
  LoyaltyP,
  ReferralAnimation,
  ReferralH,
  ReferralP,
  Why,
  Why2,
  WhyContainer,
  WhyInner,
} from '../styles/web-applications-style'
import Webappbanner from '../components/Banners/Webappbanner'
// import Webappbanner from '../components/Webappbanner'
// import Referrals from '../components/Referrals'
// import Loyalty from '../components/Loyalty'
import Border from '../components/Border/Border.jsx'
import CenteredBorder from '../components/Border/CenteredBorder'
import Loyalty from '../components/Lotties/Loyalty/Loyalty'
import Referrals from '../components/Lotties/Referrals/Referrals'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "handshake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "calendar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "payment.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "functions.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WebApplications = () => {
  const data = useStaticQuery(getImages)
  const retentioncost = [
    { x: 95, y: 'Acquisition' },
    { x: 5, y: 'Retention' },
  ]
  const retentionrevenue = [
    { x: 10, y: 5000 },
    { x: 20, y: 12000 },
    { x: 30, y: 22000 },
    { x: 40, y: 47000 },
    { x: 50, y: 110000 },
    { x: 60, y: 290000 },
  ]

  const acquisitionrevenue = [
    { x: 10, y: 5000 },
    { x: 20, y: 10000 },
    { x: 30, y: 15000 },
    { x: 40, y: 20000 },
    { x: 50, y: 25000 },
    { x: 60, y: 30000 },
  ]
  return (
    <Layout>
      <SEO
        title={'Blog Development and Best SEO practices'}
        description="At CariCode, we build blazing fast blogs to delight and retain users."
        pathname="/web-appications/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <Container>
        <Webappbanner />
        <FirstHeader>
          <FirstHeaderHeading>
            Customer retention is a strong predictor of a firm's financial
            success
          </FirstHeaderHeading>
        </FirstHeader>
        <WhyContainer>
          <WhyInner>
            <Why>
              <InnerStyles>
                <div>
                  <ReferralAnimation>
                    <div style={{ marginTop: '30px' }}>
                      <FlexibleWidthXYPlot
                        margin={{ left: 70, right: 30 }}
                        height={100}
                        yType="ordinal"
                      >
                        <XAxis
                          xDomain={[0, 120]}
                          title={'Cost'}
                          tickTotal={4}
                        />
                        <YAxis tickTotal={2} />
                        <HorizontalBarSeries
                          barWidth={0.7}
                          xDomain={[0, 120]}
                          data={retentioncost}
                        />
                      </FlexibleWidthXYPlot>
                    </div>
                  </ReferralAnimation>
                  <CostEfectiveH>Cost Effective</CostEfectiveH>
                  <CenteredBorder></CenteredBorder>
                  <CostEffectiveP>
                    It's{' '}
                    <a
                      href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: '#7c759a',
                        textDecoration: 'underline',
                      }}
                    >
                      5-25X more expensive
                    </a>{' '}
                    to acquire a new customer than it is to retain an existing
                    customer.
                  </CostEffectiveP>
                </div>
              </InnerStyles>
            </Why>
            <Why2>
              <InnerStyles>
                <FlexibleWidthXYPlot
                  margin={{ left: 70, right: 30 }}
                  height={300}
                >
                  <DiscreteColorLegend
                    style={{
                      position: 'absolute',
                      left: '100px',
                      top: '10px',
                      opacity: '1',
                    }}
                    orientation="horizontal"
                    items={[
                      {
                        title: 'Repeat Customers',
                        color: '#12939A',
                      },
                      {
                        title: 'Without',
                        color: '#79C7E3',
                      },
                    ]}
                  />
                  <XAxis title={'Time(months)'} />
                  <YAxis
                    title={'Revenue'}
                    yDomain={[0, 300000]}
                    tickTotal={6}
                  />
                  <LineSeries
                    curve={'curveMonotoneX'}
                    data={retentionrevenue}
                    style={{ fill: 'none' }}
                  />
                  <LineSeries data={acquisitionrevenue} />
                </FlexibleWidthXYPlot>
                <CostEfectiveH>ROI</CostEfectiveH>
                <CostEffectiveP>
                  A{' '}
                  <a
                    href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#7c759a',
                      textDecoration: 'underline',
                    }}
                  >
                    5% increase in customer retention
                  </a>{' '}
                  can increase company revenue by 25-95%.
                </CostEffectiveP>
              </InnerStyles>
            </Why2>
            <Why>
              <InnerStyles>
                <LoyaltyAnimation>
                  <Loyalty />
                </LoyaltyAnimation>
                <LoyaltyH>Loyalty</LoyaltyH>
                <CenteredBorder></CenteredBorder>
                <LoyaltyP>
                  Retained customers buy more often and spend more than newer
                  customers. They've learned the value of a product or service
                  and keep coming back, again and again.
                </LoyaltyP>
              </InnerStyles>
            </Why>
            <Why>
              <InnerStyles>
                <ReferralAnimation>
                  <Referrals />
                </ReferralAnimation>
                <ReferralH>Referrals</ReferralH>
                <CenteredBorder></CenteredBorder>
                <ReferralP>
                  Satisfied, loyal customers are more likely to sing a company's
                  praises and refer their friends and family — bringing in new
                  customers, free of charge.
                </ReferralP>
              </InnerStyles>
            </Why>
          </WhyInner>
        </WhyContainer>
      </Container>
    </Layout>
  )
}

export default WebApplications
