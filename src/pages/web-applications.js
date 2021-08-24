import React from 'react'
import Layout from '../components/Layout/Layout'
import sg from '../images/sg.png'
import google from '../images/google.svg'
import { useStaticQuery, graphql, Link } from 'gatsby'
import 'react-vis/dist/style.css'
import Img from 'gatsby-image'
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
  SecondHeader,
  SecondHeaderH,
  Why,
  Why2,
  WhyContainer,
  WhyInner,
  HowContainer,
  HowInner,
  CustomerExperience,
  CustomerImage,
  CustomerImg,
  HowH,
  HowP,
  EmailAuto,
  EmailImage,
  EmailImg,
  LoyaltyImage,
  GoogleAuth,
  FacebookAuth,
  Auth,
  HowRefer,
  RefText,
  RefForm,
  RefInput,
  Invite,
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
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "calendar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "payment.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "functions.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
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
        <SecondHeader>
          <SecondHeaderH>
            At CariCode we implement all the following features which are
            critical to customer retention taking your web app to the next level
          </SecondHeaderH>
        </SecondHeader>
        <HowContainer>
          <HowInner>
            <CustomerExperience>
              <InnerStyles>
                <CustomerImage>
                  <CustomerImg src={google} alt="" />
                </CustomerImage>
                <HowH>Improve customer experience</HowH>
                <HowP>
                  Delight users with a fast, responsive and visually stable
                  website built with React and Google Cloud Platform. At
                  Caricode all our web app are built so that your customes get
                  what they want quickly.
                </HowP>
              </InnerStyles>
            </CustomerExperience>
            <EmailAuto>
              <InnerStyles>
                <EmailImage>
                  <EmailImg src={sg} alt="" />
                </EmailImage>
                <HowH>Email Automation</HowH>
                <HowP>
                  We use Send Grid to automate email newsletters, promotional
                  emails, shipping notifications with send grid. Partner with
                  the email service trusted by developers and marketers for
                  time-savings, scalability, and delivery expertise.
                </HowP>
              </InnerStyles>
            </EmailAuto>
            <EmailAuto>
              <InnerStyles>
                <LoyaltyImage>
                  <Img
                    fluid={data.image.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </LoyaltyImage>
                <HowH>Loyalty Programme</HowH>
                <HowP>
                  We help you design and implement your loyalty programme.
                  Reward your customers for continuing to shop with you. Give
                  them the option to sign up for a loyalty program. However you
                  want to structure the program is fine, just make sure the
                  rules are clear. Common programs include one point for every
                  dollar spent, points earned for sharing on social media, or
                  points earned for referring friends.
                </HowP>
              </InnerStyles>
            </EmailAuto>
            <EmailAuto>
              <InnerStyles>
                <Auth>
                  <GoogleAuth>Login with Google</GoogleAuth>
                  <FacebookAuth>Login with Facebook</FacebookAuth>
                </Auth>
                <HowH>Authentication</HowH>
                <HowP>
                  We help you design and implement action points to incentivise
                  your customers to login and keep coming back
                </HowP>
              </InnerStyles>
            </EmailAuto>
            <EmailAuto>
              <InnerStyles>
                <HowRefer>
                  <VisibilitySensor offset={{ bottom: 150 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        delay={800}
                      >
                        {(props) => (
                          <RefText style={props}>Refer a friend</RefText>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        delay={1500}
                      >
                        {(props) => (
                          <div style={props}>
                            Get 10% off on your next purchase
                          </div>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                  <VisibilitySensor offset={{ bottom: 250 }}>
                    {({ isVisible }) => (
                      <Spring
                        from={{ opacity: 0 }}
                        to={{
                          opacity: isVisible ? 1 : 0,
                        }}
                        delay={2000}
                      >
                        {(props) => (
                          <RefForm style={props}>
                            <RefInput placeholder={'Email'} />
                            <Invite>Invite</Invite>
                          </RefForm>
                        )}
                      </Spring>
                    )}
                  </VisibilitySensor>
                </HowRefer>
                <HowH>Reward you Referrals</HowH>
                <HowP>
                  {' '}
                  <a
                    href="https://www.disruptiveadvertising.com/marketing/referral-marketing/#:~:text=Consumers%20are%204x%20more%20likely,than%20those%20who%20don't."
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'rgb(18, 147, 154)',
                      textDecoration: 'underline',
                    }}
                  >
                    Consumers are 4x more likely
                  </a>{' '}
                  to purchase something when referred by a friend. Word of mouth
                  marketing is believed to be behind 20-50% of all purchasing
                  decisions. B2B businesses with referral programs have 69%
                  faster closing times on sales and approximately 70% higher
                  conversion rates than those who don't.
                </HowP>
              </InnerStyles>
            </EmailAuto>
          </HowInner>
        </HowContainer>
      </Container>
    </Layout>
  )
}

export default WebApplications
