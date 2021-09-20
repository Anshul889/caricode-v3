import React, { useState } from 'react'
import Seo from '../components/Seo/Seo'
import Layout from '../components/Layout/Layout'
import question from '../images/question.svg'
import user from '../images/user-white.svg'
import addresscard from '../images/address-card-duotone.svg'
import briefcase from '../images/briefcase-duotone.svg'
import building from '../images/building-duotone.svg'
import chartbar from '../images/chart-bar-duotone.svg'
import coffee from '../images/coffee-duotone.svg'
import pencil from '../images/pencil-duotone.svg'
import phoneoffice from '../images/phone-office-duotone.svg'
import usertie from '../images/user-tie-duotone.svg'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import * as styles from '../styles/landingpage.module.css'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import product from '../images/gift.svg'
import tv from '../images/tv.svg'
import mobile from '../images/mobileproduct.svg'
import watch from '../images/watch.svg'
import VisibilitySensor from 'react-visibility-sensor'
import { config, Spring } from 'react-spring/renderprops'
import axios from 'axios'
import cross from '../images/cross.svg'
import check from '../images/check.svg'
import {
  Card,
  CardImage,
  CardText,
  SectionThree,
  SectionThreeContainer,
} from '../styles/index-style'
import { useTransition, animated } from 'react-spring'
import LandingHero from '../components/Banners/Landing/LandingHero'
import Lottie from 'react-lottie'
import animationData from '../components/Lotties/Landing/landing.json'
import Border from '../components/Border/Border'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Css from '../components/Lotties/Css/Css'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "book.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "pic01.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lp2: file(relativePath: { eq: "lp2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lp3: file(relativePath: { eq: "lp3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// const CardAnimation = styled.div`
//   height: 200px;
// `

const LandingThree = styled(SectionThreeContainer)`
  margin-top: 800px;
  margin-bottom: 120px;
  @media screen and (min-width: 768px) {
    margin: 20px 0
  }
`

const LandingPages = () => {
  const data = useStaticQuery(getImages)
  const [email, setEmail] = useState('')
  const [inputField, setInputfield] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setInputfield(false)
      const response = await axios.post(
        `https://us-central1-ecom-shopify.cloudfunctions.net/app/api/caricode`,
        {
          name: `blank`,
          email,
          message: `Interested in Landing Pages`,
        }
      )
      if (response.data === 'Submitted') {
        setLoading(false)
        setSubmitted(true)
      }
    } catch (e) {
      console.log(e)
      setInputfield(true)
    }
  }

  const transitions = useTransition(submitted && !loading, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  })

  const transitionsLoading = useTransition(loading, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.slow,
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Layout>
      <Seo
        title={'We build landing pages'}
        description="Get a landing page that actually works"
        pathname="/landing-pages/"
        image="/images/image3.jpg"
        article={true}
        date={'2020-04-17'}
      />
      <Parallax
        className="parallaxcontainer"
        style={{ width: '100%', height: '90vh' }}
        pages={5}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{ backgroundColor: '#484459' }}
        />
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{ backgroundColor: '#5eadbb' }}
        />
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{ backgroundColor: '#757575' }}
        />
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{ backgroundColor: '#5eadbb' }}
        />
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{ backgroundColor: '#7b749a' }}
        />
        <ParallaxLayer offset={0} speed={0} factor={5} />

        {/* svgs and text */}

        <ParallaxLayer offset={0} speed={0.5}>
          <div className={styles.animation}>
            <Lottie options={defaultOptions} isStopped={false} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.65} speed={0.1}>
          <h4 className={styles.paragraph}>
            Landing Pages built with a goal to drive call to action
          </h4>
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={-0.2}>
          <div className={styles.products}>
            <img src={product} alt="" />
            <img src={mobile} alt="" />
            <img src={tv} alt="" />
            <img src={watch} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.35} speed={0.1}>
          <VisibilitySensor offset={{ bottom: 375 }}>
            {({ isVisible }) => (
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: isVisible ? 1 : 0 }}
                delay={1000}
              >
                {(props) => (
                  <img
                    src={question}
                    className={styles.questionimg}
                    style={props}
                    alt=""
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ParallaxLayer>
        <ParallaxLayer offset={1.42} speed={0.1}>
          <img src={user} className={styles.specificuser} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.58} speed={0}>
          <h4 className={`${styles.paragraph} `}>Be specific</h4>
        </ParallaxLayer>
        <ParallaxLayer offset={1.65} speed={0}>
          <p className={`${styles.paragraph} `}>
            The paradox of choice reveals that less is more. Too many options
            will often hinder people from making a choice. If your landing page
            design is focused on a single purpose, you’re helping your customers
            make the right decisions and you will increase conversion rates.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0.2}>
          <div className={styles.visuals}>
            <img
              src={addresscard}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
            <img
              src={briefcase}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
            <img
              src={building}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
            <img
              src={chartbar}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
            <img
              src={coffee}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
            <img
              src={pencil}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
            <img
              src={phoneoffice}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
            <img
              src={usertie}
              style={{
                display: 'block',
                width: '100%',
              }}
              alt=""
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0}>
          <h4 style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            High quality visuals
          </h4>
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0}>
          <p className={styles.paragraph}>
            The design of a website is what drives our first impression 94% of
            the time. Because it only takes us fractions of a second to take it
            all in. We subconsciously decide whether we want to stick around or
            not in the blink of an eye.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.1}>
          <div className={styles.testimonial1}>
            <img
              src="https://randomuser.me/api/portraits/women/71.jpg"
              alt=""
            />
            <h4>Elaine Ryan</h4>
            <p>Great website ! The parallax effect is so good</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.57} speed={0}>
          <h4 style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            Use testimonials
          </h4>
        </ParallaxLayer>
        <ParallaxLayer offset={3.65} speed={0}>
          <p className={styles.paragraph}>
            People don’t go looking for testimonials. Instead, they want to see
            them when making a critical decision. That means testimonials should
            be everywhere. They should be one of the first things people see on
            your homepage.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={4.07} speed={-0.1}>
          <div className={styles.leadmagnet}>
            <div className={styles.leadmagnetimg}>
              <Image
                fluid={data.image.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
            </div>
            <div className={styles.freecourse}>
              <i>Get our full course 100% free</i>
            </div>
            <VisibilitySensor offset={{ bottom: 350 }}>
              {({ isVisible }) => (
                <Spring
                  from={{ opacity: 0 }}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                  delay={500}
                >
                  {(props) => (
                    <div className={styles.refform} style={props}>
                      <input
                        placeholder={'Email'}
                        className={styles.referralinput}
                      />
                      <button>SIGN UP</button>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.57} speed={0}>
          <h4 className={styles.paragraph}>Create a lead magnet</h4>
        </ParallaxLayer>
        <ParallaxLayer offset={4.65} speed={0}>
          <p className={styles.paragraph}>
            You need to give away valuable content for free
          </p>
        </ParallaxLayer>
      </Parallax>
      <div className={styles.dlanding}>
        <LandingHero />
        <div>
          <div className={styles.odditem}>
            <div className={styles.colorbg1}>
              <h3>Be specific</h3>
            </div>
            <div className={styles.oddimage}>
              <Image fluid={data.image2.childImageSharp.fluid} />
            </div>
            <VisibilitySensor offset={{ top: -3000, bottom: 200 }}>
              {({ isVisible }) => (
                <Spring
                  from={{ transform: 'translateX(-10%)' }}
                  to={{
                    transform: isVisible
                      ? 'translateX(-30%)'
                      : 'translateX(-10%)',
                  }}
                  delay={800}
                >
                  {(props) => (
                    <div className={styles.oddcontent} style={props}>
                      <p>
                        The paradox of choice reveals that less is more. Too
                        many options will often hinder people from making a
                        choice.
                        <span className={styles.contenttext}>
                          {' '}
                          If your landing page design is focused on a single
                          purpose, you’re helping your customers make the right
                          decisions and you will increase conversion rates.
                        </span>
                      </p>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <div className={styles.evenitem}>
            <div className={styles.evenimage}>
              <Image fluid={data.lp2.childImageSharp.fluid} />
            </div>
            <div className={styles.colorbg2}>
              <h3>High quality visuals</h3>
            </div>
            <VisibilitySensor offset={{ top: -3000, bottom: 200 }}>
              {({ isVisible }) => (
                <Spring
                  from={{ transform: 'translateX(10%)' }}
                  to={{
                    transform: isVisible
                      ? 'translateX(30%)'
                      : 'translateX(10%)',
                  }}
                  delay={800}
                >
                  {(props) => (
                    <div className={styles.evencontent} style={props}>
                      <p>
                        The design of a website is what drives our first
                        impression 94% of the time.
                        <span className={styles.contenttext}>
                          Because it only takes us fractions of a second to take
                          it all in. We subconsciously decide whether we want to
                          stick around or not in the blink of an eye.
                        </span>
                      </p>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <div className={styles.odditem}>
            <div className={styles.colorbg1}>
              <h3>Testimonials</h3>
            </div>
            <div className={styles.oddimage}>
              <Image fluid={data.lp3.childImageSharp.fluid} />
            </div>
            <VisibilitySensor offset={{ top: -3000, bottom: 200 }}>
              {({ isVisible }) => (
                <Spring
                  from={{ transform: 'translateX(-10%)' }}
                  to={{
                    transform: isVisible
                      ? 'translateX(-30%)'
                      : 'translateX(-10%)',
                  }}
                  delay={800}
                >
                  {(props) => (
                    <div className={styles.oddcontent} style={props}>
                      <p>
                        People don’t go looking for testimonials. Instead, they
                        want to see them when making a critical decision.{' '}
                        <span className={styles.contenttext}>
                          {' '}
                          That means testimonials should be everywhere. They
                          should be one of the first things people see on your
                          homepage.
                        </span>
                      </p>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <div className={styles.evenitem}>
            <div className={styles.evenimage}>
              <Image fluid={data.image2.childImageSharp.fluid} />
            </div>
            <div className={styles.colorbg2}>
              <h3>Lead Magnet</h3>
            </div>
            <VisibilitySensor offset={{ top: -3000, bottom: 200 }}>
              {({ isVisible }) => (
                <Spring
                  from={{ transform: 'translateX(10%)' }}
                  to={{
                    transform: isVisible
                      ? 'translateX(30%)'
                      : 'translateX(10%)',
                  }}
                  delay={800}
                >
                  {(props) => (
                    <div className={styles.evencontent} style={props}>
                      <p>You need to give away valuable content for free</p>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </div>

        <Spring
          from={{ bottom: -50 }}
          to={{
            bottom: 0,
          }}
          config={config.slow}
          delay={10000}
        >
          {(props) => (
            <div className={styles.dfeatureupper} style={props}>
              {!submitted && !loading && (
                <div className={styles.featureselected}>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    onClick={() => setInputfield(true)}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {inputField ? (
                    <button onClick={() => handleSubmit()}>Submit</button>
                  ) : (
                    <button style={{ opacity: '0.5' }}>Submit</button>
                  )}
                </div>
              )}
              {transitionsLoading.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.div
                      key={key}
                      style={{
                        ...props,
                        marginTop: '14px',
                        textAlign: 'center',
                      }}
                    >
                      Loading...
                    </animated.div>
                  )
              )}
              {transitions.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.div
                      key={key}
                      style={{
                        ...props,
                        marginTop: '14px',
                        textAlign: 'center',
                      }}
                    >
                      We will get back to you shortly!
                    </animated.div>
                  )
              )}
            </div>
          )}
        </Spring>
      </div>
      <LandingThree>
        <h3>Features we'll provide</h3>
        <div style={{ width: '90%', margin: '0 auto', maxWidth: '1200px' }}>
          <Border />
        </div>
        <SectionThree>
          <Card>
            <CardImage>
              <StaticImage src="../images/css.jpg" />
            </CardImage>
            <CardText>
              <h4 style={{ color: '#444' }}>Pixel Perfect CSS</h4>
              <Border />
              <p>
                Performance plays a significant role in the success of any
                online venture, as highly performing sites engage and retain
                users better than poorly performing ones.
              </p>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image5.jpg" />
            </CardImage>
            <CardText>
              <h4 style={{ color: '#444' }}>Maintable code</h4>
              <Border />
              <p>
                Screen sizes are always changing, so it's important that your
                site can adapt to any screen size, today or in the future.
              </p>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/interactive.jpg" />
            </CardImage>
            <CardText>
              <h4 style={{ color: '#444' }}>Interactive and Fun to use</h4>

              <Border />
              <p>
                Built with React JS, a scalable technology developed and
                maintained by Facebook. Used by all major technology firms,
                Uber, Twitter, Netlfix and Airbnb.
              </p>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image3.jpg" />
            </CardImage>
            <CardText>
              <h4 style={{ color: '#444' }}>Site Speed</h4>
              <Border />
              <p>
                Mobile users are very goal-oriented. They expect to be able to
                get what they need, immediately, and on their own terms.
              </p>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/image7.jpg" />
            </CardImage>
            <CardText>
              <h4 style={{ color: '#444' }}>Seo Friendly</h4>
              <Border />
              <p>
                Custom Navigation for the Web and Mobile, Authentications, Blog,
                Offline support, Easily manage your content
              </p>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <StaticImage src="../images/results.jpg" />
            </CardImage>
            <CardText>
              <h4 style={{ color: '#444' }}>Results</h4>

              <Border />
              <p>
                A high-quality Progressive Web App has incredible benefits,
                making it easy to delight your users, grow engagement and
                increase conversions.
              </p>
            </CardText>
          </Card>
        </SectionThree>
      </LandingThree>
      {/* <div className={styles.landingThree}>
        <h3>Features We'll provide - make it look like home page</h3>
        <div className={styles.border}></div>
        <div className={styles.howcontainer}>
          <div className={styles.howinner}>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.emailimage}>
                  <div className={styles.svganim}>
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <Spring
                          from={{ x: '0' }}
                          to={{
                            x: isVisible ? '1' : '0',
                          }}
                          config={config.slow}
                          delay={1500}
                        >
                          {(props) => (
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fad"
                              data-icon="object-ungroup"
                              class="svg-inline--fa fa-object-ungroup fa-w-18"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <g class="fa-group">
                                <path
                                  class="fa-secondary"
                                  fill="rgb(18, 147, 154)"
                                  d="M544 224v192h26a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-26H224v26a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-52a6 6 0 0 1 6-6h26v-96h32v96h288V224H384v-32h128v-26a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6z"
                                  opacity={props.x}
                                ></path>
                                <path
                                  class="fa-primary"
                                  fill="currentColor"
                                  d="M384 96v192h26a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-26H64v26a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-52a6 6 0 0 1 6-6h26V96H6a6 6 0 0 1-6-6V38a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v26h288V38a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6z"
                                ></path>
                              </g>
                            </svg>
                          )}
                        </Spring>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
                <h4>Pixel Perfect CSS</h4>
                <p>
                  <ul>
                    <li>Design will be copied perfectly.</li>
                    <li>Layouts will work on all devices</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.emailimage}>
                  <div className={styles.svganim}>
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <Spring
                          from={{ x: '0' }}
                          to={{
                            x: isVisible ? '1' : '0',
                          }}
                          config={config.slow}
                          delay={1500}
                        >
                          {(props) => (
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fad"
                              data-icon="code"
                              class="svg-inline--fa fa-code fa-w-20"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <g class="fa-group">
                                <path
                                  class="fa-secondary"
                                  fill="rgb(18, 147, 154)"
                                  d="M422.12 18.16a12 12 0 0 1 8.2 14.9l-136.5 470.2a12 12 0 0 1-14.89 8.2l-61-17.7a12 12 0 0 1-8.2-14.9l136.5-470.2a12 12 0 0 1 14.89-8.2z"
                                  opacity={props.x}
                                ></path>
                                <path
                                  class="fa-primary"
                                  fill="currentColor"
                                  d="M636.23 247.26l-144.11-135.2a12.11 12.11 0 0 0-17 .5L431.62 159a12 12 0 0 0 .81 17.2L523 256l-90.59 79.7a11.92 11.92 0 0 0-.81 17.2l43.5 46.4a12 12 0 0 0 17 .6l144.11-135.1a11.94 11.94 0 0 0 .02-17.54zm-427.8-88.2l-43.5-46.4a12 12 0 0 0-17-.5l-144.11 135a11.94 11.94 0 0 0 0 17.5l144.11 135.1a11.92 11.92 0 0 0 17-.5l43.5-46.4a12 12 0 0 0-.81-17.2L117 256l90.6-79.7a11.92 11.92 0 0 0 .83-17.24z"
                                ></path>
                              </g>
                            </svg>
                          )}
                        </Spring>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
                <h4>Maintable and Customizable code</h4>
                <ul>
                  <li>
                    Changes to the page can be made for new features/products
                  </li>
                  <li>Code will always work</li>
                </ul>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.emailimage}>
                  <div className={styles.smile}>
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <Spring
                          from={{ x: '0' }}
                          to={{
                            x: isVisible ? '1' : '0',
                          }}
                          config={config.slow}
                          delay={1500}
                        >
                          {(props) => (
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="smile-beam"
                              class="svg-inline--fa fa-smile-beam fa-w-16"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 496 512"
                            >
                              <path
                                fill="currentColor"
                                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM112 223.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5zm250.8 122.8C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.3 24.6 20.5zm6.2-118.3l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5 3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.6 8.6-11 11.9-15.1 4.5z"
                                opacity={props.x}
                              ></path>
                            </svg>
                          )}
                        </Spring>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
                <h4>Interactive and Fun to use</h4>
                <ul>
                  <li>how complex and subtle animations will delight users </li>
                </ul>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.emailimage}>
                  <div className={styles.slowsvg}>
                    <div className={styles.fast}>
                      <Spring
                        from={{
                          a: '40',
                          b: '40',
                          c: '40',
                          d: '100',
                          e: '40',
                          f: '160',
                          g: '40',
                          h: '220',
                          i: '40',
                          j: '280',
                        }}
                        to={{
                          a: '150',
                          b: '40',
                          c: '250',
                          d: '100',
                          e: '200',
                          f: '160',
                          g: '260',
                          h: '220',
                          i: '280',
                          j: '280',
                        }}
                        config={config.molasses}
                        delay={800}
                      >
                        {(props) => (
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="mobile"
                            class="svg-inline--fa fa-mobile fa-w-10"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            style={{
                              paddingBottom: '18px',
                              height: '100px',
                              placeSelf: 'center',
                            }}
                          >
                            <g class="fa-group">
                              <path
                                class="fa-secondary"
                                fill="black"
                                d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                                opacity="0.4"
                              ></path>
                              <path
                                class="fa-primary"
                                fill="currentColor"
                                d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
                              ></path>
                              <line
                                x1="40"
                                y1="40"
                                x2={props.a}
                                y2={props.b}
                                style={{
                                  stroke: 'rgb(18, 147, 154)',
                                  strokeWidth: '4',
                                }}
                              />
                              <line
                                x1="40"
                                y1="100"
                                x2={props.c}
                                y2={props.d}
                                style={{
                                  stroke: 'rgb(18, 147, 154)',
                                  strokeWidth: '4',
                                }}
                              />
                              <line
                                x1="40"
                                y1="160"
                                x2={props.e}
                                y2={props.f}
                                style={{
                                  stroke: 'rgb(18, 147, 154)',
                                  strokeWidth: '4',
                                }}
                              />
                              <line
                                x1="40"
                                y1="220"
                                x2={props.g}
                                y2={props.h}
                                style={{
                                  stroke: 'rgb(18, 147, 154)',
                                  strokeWidth: '4',
                                }}
                              />
                              <line
                                x1="40"
                                y1="280"
                                x2={props.i}
                                y2={props.j}
                                style={{
                                  stroke: 'rgb(18, 147, 154)',
                                  strokeWidth: '4',
                                }}
                              />
                            </g>
                          </svg>
                        )}
                      </Spring>
                      <img src={check} height={25} alt="" />
                    </div>
                    <div className={styles.slow}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="mobile"
                        class="svg-inline--fa fa-mobile fa-w-10"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        style={{
                          paddingBottom: '18px',
                          height: '100px',
                          placeSelf: 'center',
                          gridRow: '1',
                          gridColumn: '1',
                        }}
                      >
                        <g class="fa-group">
                          <path
                            class="fa-secondary"
                            fill="black"
                            d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                            opacity="0.4"
                          ></path>
                          <path
                            class="fa-primary"
                            fill="currentColor"
                            d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
                          ></path>
                        </g>
                      </svg>
                      <svg
                        style={{
                          margin: 'auto',
                          background: 'black',
                          display: 'block',
                          transform: 'translateY(-20px)',
                          gridRow: '1',
                          gridColumn: '1',
                        }}
                        width="40px"
                        height="40px"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                      >
                        <g transform="rotate(0 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.9166666666666666s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(30 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.8333333333333334s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(60 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.75s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(90 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.6666666666666666s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(120 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.5833333333333334s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(150 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.5s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(180 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.4166666666666667s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(210 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.3333333333333333s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(240 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.25s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(270 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.16666666666666666s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(300 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="-0.08333333333333333s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                        <g transform="rotate(330 50 50)">
                          <rect
                            x="47"
                            y="24"
                            rx="3"
                            ry="6"
                            width="6"
                            height="12"
                            fill="rgb(18, 147, 154)"
                          >
                            <animate
                              attributeName="opacity"
                              values="1;0"
                              keyTimes="0;1"
                              dur="1s"
                              begin="0s"
                              repeatCount="indefinite"
                            ></animate>
                          </rect>
                        </g>
                      </svg>
                      <img src={cross} height={25} alt="" />
                    </div>
                  </div>
                </div>
                <h4>Site Speed</h4>
                <p>
                  Performance plays a significant role in the success of any
                  online venture, as highly performing sites engage and retain
                  users better than poorly performing ones.
                </p>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.emailimage}>
                  <div className={styles.svganim}>
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <Spring
                          from={{ x: '0' }}
                          to={{
                            x: isVisible ? '1' : '0',
                          }}
                          config={config.slow}
                          delay={1500}
                        >
                          {(props) => (
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="search-location"
                              class="svg-inline--fa fa-search-location fa-w-16"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                opacity={props.x}
                                d="M208 112c-40.78 0-73.83 33.05-73.83 73.83 0 32.96 48.25 93.05 66.74 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.74-81.89 66.74-114.86 0-40.78-33.05-73.83-73.83-73.83zm0 96c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm300.47 260.88l-121.39-121.4c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-135.99C415.98 93.1 322.88 0 207.99 0S0 93.1 0 207.99c0 114.89 93.1 207.99 207.99 207.99 52 0 99.49-19.1 135.99-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.39 121.39c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.71-4.69 4.71-12.29 0-16.99zm-300.48-100.9c-88.4 0-159.99-71.6-159.99-159.99C48 119.59 119.59 48 207.99 48c88.39 0 159.99 71.6 159.99 159.99 0 88.4-71.6 159.99-159.99 159.99z"
                              ></path>
                            </svg>
                          )}
                        </Spring>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
                <h4>Seo Friendly</h4>
                <ul>
                  <li>meta tags implementation</li>
                  <li>rich snippets implementation</li>
                </ul>
              </div>
            </div>
            <div className={styles.emailauto}>
              <div className={styles.inner}>
                <div className={styles.emailimage}>
                  <div>
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <svg height="100" width="100%">
                          <Spring
                            from={{ value: '0%', value2: '100%' }}
                            config={config.slow}
                            delay={1000}
                            to={{
                              value: isVisible ? '100%' : '0%',
                              value2: isVisible ? '0%' : '100%',
                            }}
                          >
                            {(props) => (
                              <line
                                x1="0"
                                y1="100"
                                x2={props.value}
                                y2={props.value2}
                                style={{
                                  stroke: 'rgb(18, 147, 154)',
                                  strokeWidth: '2',
                                }}
                              />
                            )}
                          </Spring>
                          )
                          <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="100"
                            style={{ stroke: 'rgb(0, 0, 0)', strokeWidth: '2' }}
                          />
                          <line
                            x1="0"
                            y1="100"
                            x2="100%"
                            y2="100"
                            style={{ stroke: 'rgb(0, 0, 0)', strokeWidth: '2' }}
                          />
                        </svg>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
                <h4>Results</h4>
                <p>
                  Studies show that marketers capture leads at a higher rate by
                  sending them to dedicated landing pages, rather than sending
                  traffic to the home page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
      <Spring
        from={{ bottom: -1 }}
        to={{
          bottom: 50,
        }}
        config={config.slow}
        delay={10000}
      >
        {(props) => (
          <div className={styles.mfeatureupper} style={props}>
            {!submitted && !loading && (
              <div className={styles.featureselected}>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  onClick={() => setInputfield(true)}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {inputField ? (
                  <button onClick={() => handleSubmit()}>Submit</button>
                ) : (
                  <button style={{ opacity: '0.5' }}>Submit</button>
                )}
              </div>
            )}
            {transitionsLoading.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={{ ...props, marginTop: '14px', textAlign: 'center' }}
                  >
                    Loading...
                  </animated.div>
                )
            )}
            {transitions.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={{ ...props, marginTop: '14px', textAlign: 'center' }}
                  >
                    We will get back to you shortly!
                  </animated.div>
                )
            )}
          </div>
        )}
      </Spring>
    </Layout>
  )
}

export default LandingPages
