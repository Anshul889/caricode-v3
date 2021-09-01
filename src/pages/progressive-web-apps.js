import React from 'react'
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
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const ProgressiveWebApps = () => {
  return (
    <Layout>
      <SEO
        title={'Progressive Web Apps'}
        description="Transitioning your business from a website to a Progressive Web App offers major benefits, most importantly, superior performance and increased conversions. Our Progressive Web Apps are responsive, fast, and connection-independent."
        pathname="/progressive-web-apps/"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <Container>
        <Inner>
          <Content>
            <Heading>Progressive Web Apps</Heading>
            <p>
              A high-quality Progressive Web App has incredible benefits, making
              it easy to delight your users, grow engagement and increase
              conversions.
            </p>
            <p>
              User experience on the internet has transitioned from static
              websites, to dynamic websites (allowing users to have more
              interactions) to native mobile applications (smooth transitions
              between pages, and better offline experience that native apps
              offered) to web applications. The concept of website has become
              obsolete and the term Wep App has replaced it.
            </p>
            <p>
              A high-quality Progressive Web App has incredible benefits, making
              it easy to delight your users, grow engagement and increase
              conversions.
            </p>
            <p>
              User experience on the internet has transitioned from static
              websites, to dynamic websites (allowing users to have more
              interactions) to native mobile applications (smooth transitions
              between pages, and better offline experience that native apps
              offered) to web applications. The concept of website has become
              obsolete and the term Wep App has replaced it.
            </p>

            <p>
              For businesses globally{' '}
              <i>60-70 percent of traffic comes from mobile browsers</i>. Users
              don’t want to download and install a native app unless they feel
              they would use it every day. Globally businesses are transitioning
              from website to web apps which are being created on a daily basis
            </p>
            <p>
              The term <i>Progressive Web apps</i> is used to describe{' '}
              <i>
                web apps that use new features supported by modern browsers.
              </i>
            </p>
            <p>
              At Caricode we build progressive web apps that deliver{' '}
              <i>
                high performance, engaging, native-like experience, and the
                ability to work offline
              </i>
              . Users like apps that work, yet they like apps that work fast and
              provide the best experience even more.
            </p>
            <p>
              Transitioning your business from a website to a Progressive Web
              App offers major benefits, most importantly, superior performance
              and increased conversions. Our Progressive Web Apps are{' '}
              <i>responsive, fast, and connection-independent.</i>
            </p>
            <p>
              Other Advantages of building a progressive web app instead of a
              website for your business include:
            </p>
            <ul>
              <li>Ease of access compared to a website or native app</li>
              <li>SEO optimised and supported by Google</li>
              <li>Always up to date</li>
              <li>Scalable and efficient</li>
              <li>Offline support</li>
              <li>Push Notifications</li>
              <li>Geolocation Support</li>
              <li>
                Secure, each page has be served over HTTPS, which offer better
                encryption and is promoted by Google as an SEP
              </li>
              <li>Access to camera and Microphone</li>
            </ul>
            <h4>
              A number of companies have succeeded with Progressive Web Apps:
            </h4>
            <dt>Twitter</dt>
            <dd>
              The Twitter Lite Progressive Web App became the default mobile web
              experience for all users globally in April 2017, which resulted
              in:
              <ul>
                <li>65% increase in pages per session</li>
                <li>75% increase in Tweets sent</li>
                <li>20% decrease in bounce rate</li>
              </ul>
            </dd>

            <dt>Flipkart</dt>
            <dd>
              Flipkart, India’s largest e-commerce site, decided to combine
              their web presence and native app into a Progressive Web
              Application, resulting in a 70% increase in conversions.
            </dd>
            <dt>Wego</dt>
            <dd>
              After building a PWA, the travel company Wego noticed a 26%
              increase in the number of users, a 95% increase in conversions on
              Android, and a 50% increase on iOS.
            </dd>
            <dt>BookMyShow</dt>
            <dd>
              BookMyShow India’s largest ticketing firm, with 50+ million
              monthly visitors, developed an improved version of their mobile
              website using a Progressive Web App (PWA), delivering an 80+%
              increase in conversions, which means more users purchasing
              tickets.
            </dd>
          </Content>
          <Recommended>
            <Rec>
              <FirstItem>
                <Link to="/web-performance/">
                  <StaticImage src="../images/image3.jpg" />
                </Link>
                <h3>
                  <Link to="/web-performance/">Web Performance</Link>
                </h3>
                <p>
                  Performance plays a significant role in the success of any
                  online venture, as highly performing sites engage and retain
                  users better than poorly performing ones.
                </p>
              </FirstItem>
              <SecondItem>
                <Link to="/multi-device-support/">
                  <StaticImage src="../images/image4.jpg" />
                </Link>
                <h3>
                  <Link to="/multi-device-support/">Multi Device Support</Link>
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

export default ProgressiveWebApps
