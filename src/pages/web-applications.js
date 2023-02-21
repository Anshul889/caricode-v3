import React from 'react'
import Layout from '../components/Layout/Layout'
import sg from '../images/sg.png'
import nextjs from '../images/nextjs.svg'
import { useStaticQuery, graphql } from 'gatsby'
import 'react-vis/dist/style.css'
import Img from 'gatsby-image'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring } from 'react-spring/renderprops'
import {
  HorizontalBarSeries,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
  LineSeries,
  DiscreteColorLegend,
} from 'react-vis'
import Seo from '../components/Seo/Seo'
import {
  Container,
  CostEfectiveH,
  CostEffectiveP,
  FirstHeader,
  FirstHeaderHeading,
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
  FormFeature,
  FormFeatureInput,
} from '../styles/web-applications-style'
import Webappbanner from '../components/Banners/WebApp/Webappbanner'
import CenteredBorder from '../components/Border/CenteredBorder'
import Loyalty from '../components/Lotties/Loyalty/Loyalty'
import Referrals from '../components/Lotties/Referrals/Referrals'
import WebappPopup from '../components/Popups/WebappPopup'

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
    image3: file(relativePath: { eq: "security.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "harddrive.jpg" }) {
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
      <Seo
        title={'Web Applications'}
        description="At CariCode, we build blazing fast web applications to delight and retain users."
        pathname="/web-appications/"
        image="/images/image4.jpg"
        date={'2023-01-30'}
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

        <HowContainer>
          <SecondHeader>
            <SecondHeaderH>
              Features that will take your webapp to the next level
            </SecondHeaderH>
          </SecondHeader>
          <HowInner>
            <CustomerExperience>
              <InnerStyles>
                <CustomerImage>
                  <CustomerImg src={nextjs} alt="" />
                </CustomerImage>
                <HowH>Customer experience</HowH>
                <HowP>
                  Delight users with a fast, responsive and visually stable
                  website built with NextJS. At Caricode all our web apps are
                  built so that your customers get what they want quickly.
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
                  rules are clear.
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
                      color: 'rgb(22, 243, 255);',
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
            <EmailAuto>
              <InnerStyles>
                <LoyaltyImage>
                  <Img
                    fluid={data.image2.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </LoyaltyImage>
                <HowH>Payments</HowH>
                <HowP>
                  Making it as easy as possible for your customers to pay is
                  essential for increasing conversions and sales. This is why
                  your checkout page is critical. It’s the final stop for people
                  shopping on your website. It’s the place where they hand over
                  their credit card information and finally part with their
                  hard-earned cash.
                </HowP>
              </InnerStyles>
            </EmailAuto>
            <EmailAuto>
              <InnerStyles>
                <LoyaltyImage>
                  <Img
                    fluid={data.image3.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </LoyaltyImage>
                <HowH>Security</HowH>
                <HowP>
                The apps come with built-in security features like automatic CSRF protection and XSS prevention. Other security best practices include using HTTPS, input validation, and limiting user permissions. It's also important to keep the framework and its dependencies up-to-date to address any potential security vulnerabilities. Additionally, Next.js offers integration with security tools and services for added protection.
                </HowP>
              </InnerStyles>
            </EmailAuto>
            <EmailAuto>
              <InnerStyles>
                <HowRefer>
                  <FormFeature>
                    <FormFeatureInput
                      placeholder="Name"
                      type="text"
                      autoComplete="name"
                    />
                    <FormFeatureInput
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                    />
                  </FormFeature>
                </HowRefer>
                <HowH>Forms</HowH>
                <HowP>
                  Website forms are unique in that they allow one to control the
                  type of information they collect from a potential client. They
                  allow an individual or organization to provide information on
                  specific fields and furthermore specify which fields are
                  mandatory to fill in and the ones that are optional.
                </HowP>
                {/* Store and serve user-generated content with ease as your app grows from prototype to production-ready. */}
              </InnerStyles>
            </EmailAuto>
            <EmailAuto>
              <InnerStyles>
                <LoyaltyImage>
                  <Img
                    fluid={data.image4.childImageSharp.fluid}
                    style={{ borderRadius: '4px' }}
                  />
                </LoyaltyImage>
                <HowH>Cloud Storage</HowH>
                <HowP>
                  Store and serve user-generated content with ease as your app
                  grows from prototype to production-ready.
                </HowP>
              </InnerStyles>
            </EmailAuto>
          </HowInner>
        </HowContainer>
        <WebappPopup />
      </Container>
    </Layout>
  )
}

export default WebApplications
