import React, { useState } from 'react'
import { Spring, config } from 'react-spring/renderprops'

import { useStaticQuery, graphql } from 'gatsby'
import * as styles from '../../styles/blogs.module.css'
import axios from 'axios'
import { useTransition, animated } from 'react-spring'
import Lottie from 'react-lottie'
import animationData from '../Lotties/Search/search-file.json'
import Bloguiux from '../Lotties/Blog/Bloguiux'
import BlogFeatures from './BlogFeatures'
import PageFeatures from './PageFeatures'
import BlogServices from './BlogServices'

const getImages = graphql`
  {
    image17: file(relativePath: { eq: "image17.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    links: file(relativePath: { eq: "links.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BlogBody = () => {
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
          message: `Interested in Blog`,
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

  const datamf = [
    { x: new Date('Jan 1 2020').getTime(), y: 15000 },
    { x: new Date('February 1 2020').getTime(), y: 16000 },
    { x: new Date('March 1 2020').getTime(), y: 18000 },
    { x: new Date('Apr 1 2020').getTime(), y: 20000 },
    { x: new Date('May 1 2020').getTime(), y: 20000 },
    { x: new Date('June 1 2020').getTime(), y: 22000 },
    { x: new Date('July 1 2020').getTime(), y: 27000 },
    { x: new Date('August 1 2020').getTime(), y: 27000 },
    { x: new Date('September 1 2020').getTime(), y: 30000 },
    { x: new Date('October 1 2020').getTime(), y: 27000 },
    { x: new Date('November 1 2020').getTime(), y: 32000 },
    { x: new Date('December 1 2020').getTime(), y: 32000 },
  ]

  const speedData = [
    { x: 2, y: 9.6 },
    { x: 3, y: 13 },
    { x: 4, y: 17.1 },
    { x: 5, y: 22.2 },
    { x: 6, y: 27.4 },
    { x: 7, y: 32.3 },
  ]

  const algoData = [
    { x: new Date('Jan 1 2009').getTime(), y: 400 },
    { x: new Date('Jan 1 2018').getTime(), y: 3200 },
  ]

  const ctrdata = [
    { x: 1, y: 31 },
    { x: 2, y: 24 },
    { x: 3, y: 18 },
    { x: 4, y: 13 },
    { x: 5, y: 9 },
    { x: 6, y: 6 },
    { x: 7, y: 4 },
    { x: 8, y: 3 },
    { x: 9, y: 2 },
    { x: 10, y: 2 },
  ]

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className={styles.section2}>
      <div className={styles.firstheader}>
        <div className={styles.finner}>
          <div className={styles.searchbar}>
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt=""
            />
            <input placeholder="Search"></input>
          </div>
          <div className={styles.searchanimation}>
            <Lottie options={defaultOptions} isStopped={false} />
          </div>
          <h2>
            Organic search <br /> is the golden ticket
          </h2>
          <p>
            For every enganging blog post, thats one more indexed page on your
            website which more opurtunity to drive traffic to your website to
            drive organic search.
          </p>
          <div className={styles.stats}>
            <h1>93%</h1>
            <p className={styles.firstp}>
              Of online experiences
              <br /> begin with a search engine
            </p>
            <h1>70%</h1>
            <p className={styles.secondp}>
              of marketers find SEO better than PPC
            </p>
          </div>
        </div>
      </div>
      <div className={styles.dbody}>
        <div className={styles.trafficexperience}>
          <div className={styles.webtraffic}>
            <h3>
              Web traffic is among the top two most-common measurements of
              success for content marketing strategies
            </h3>
            {/* <p>
              Good content marketing provides the following: Ideas Inspiration
              Tips and tricks Education. Consumers want transparency. They want
              to see who you really are. Customers want to interact and get to
              know a brand. A company’s blog (or social accounts) can help show
              consumers who they really are. They will not buy yor product till
              they engage with 100 pieces of content
            </p> */}
          </div>
          <div className={styles.richexperiences}>
            <h3>Consumers have very high expecations of the web</h3>
          </div>
        </div>
        <div className={styles.uiux}>
          <div className={styles.uiinner}>
            <div>
              <h2>Transform your blog with a cutting edge ui/ux</h2>
              <p>
                UX design has a direct and powerful impact on your SEO rankings
                through the various metrics that search engines use to track
                user engagement. It helps you understand how users engage and
                interact with your website, as it considers such factors as page
                speed, mobile responsiveness, menu/header layout, and URL
                structure.
              </p>
            </div>
            <div className={styles.uiuxanimation}>
              <Bloguiux />
            </div>
          </div>
        </div>
        <BlogFeatures />
        <PageFeatures />
        <BlogServices />
      </div>
      <div className={styles.dwhyonline}></div>
      {/* <div className={styles.whyonline}>
        <div className={styles.ctrposition}>
          <div class={styles.inner}>
            <h4>95% of users don’t scroll past the 5th result</h4>
            <FlexibleWidthXYPlot margin={{ left: 30, right: 30 }} height={300}>
              <XAxis title="Position" />
              <YAxis title={'Click Through Rate'} yDomain={[0, 100]} />
              <LineSeries
                curve={'curveMonotoneX'}
                yDomain={[0, 100]}
                data={ctrdata}
              />
            </FlexibleWidthXYPlot>
          </div>
        </div>
        <div className={styles.mainorganic}>
          <div className={styles.inner}>
            <h4>
              70-80% of people ignore paid search results, choosing to only
              click on organic listings
            </h4>
            <div className={styles.organicclicks}>
              <div className={styles.searchresultred}>
                <div className={styles.inner}>
                  <div className={styles.adwarning}>
                    <div className={styles.ad}>Ad</div>
                    <div className={styles.dot}>‎•‎‎</div>
                    <div className={styles.webaddress}>www.ad.com</div>
                  </div>
                  <div className={styles.title}>
                    The Best Ad on the internet
                  </div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </div>
                </div>
              </div>
              <div className={styles.searchresultgreen}>
                <div className={styles.inner}>
                  <div className={styles.adwarning}>
                    <div className={styles.webaddress}>
                      www.organiclisting.com
                    </div>
                  </div>
                  <div className={styles.title}>The Best Organic Result</div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </div>
                </div>
              </div>
              <div className={styles.searchresultgreen}>
                <div className={styles.inner}>
                  <div className={styles.adwarning}>
                    <div className={styles.webaddress}>
                      www.organiclisting.com
                    </div>
                  </div>
                  <div className={styles.title}>Result 2</div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </div>
                </div>
              </div>
              <div className={styles.searchresultgreen}>
                <div className={styles.inner}>
                  <div className={styles.adwarning}>
                    <div className={styles.webaddress}>
                      www.organiclisting.com
                    </div>
                  </div>
                  <div className={styles.title}>Result 3</div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </div>
                </div>
              </div>
              <div className={styles.searchresultgreen}>
                <div className={styles.inner}>
                  <div className={styles.adwarning}>
                    <div className={styles.webaddress}>
                      www.organiclisting.com
                    </div>
                  </div>
                  <div className={styles.title}>Result 4</div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctrtable}>
          <h4>Click through rate changes based on position</h4>
          <table>
            <thead>
              <tr>
                <th>Position Change</th>
                <th>CTR Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 &#8594; 1</td>
                <td className={styles.increase}>&#8593; 28.4%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>3 &#8594; 2</td>
                <td className={styles.increase}>&#8593; 32.4%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>4 &#8594; 3</td>
                <td className={styles.increase}>&#8593; 37.2%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>5 &#8594; 4</td>
                <td className={styles.increase}>&#8593; 43.1%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>6 &#8594; 5</td>
                <td className={styles.increase}>&#8593; 53.2%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>7 &#8594; 6</td>
                <td className={styles.increase}>&#8593; 49.3%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>8 &#8594; 7</td>
                <td className={styles.increase}>&#8593; 33%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.contentmeasure}>
          <div className={styles.inner}>
            <h4>
              Web traffic is among the top two most-common measurements of
              success for content marketing strategies
            </h4>
            <FlexibleWidthXYPlot margin={{ left: 60, right: 30 }} height={300}>
              <XAxis xType="time" tickTotal={6} />
              <YAxis title={'Users'} yDomain={[0, 35000]} />
              <LineSeries
                curve={'curveMonotoneX'}
                data={datamf}
                yDomain={[0, 35000]}
              />
            </FlexibleWidthXYPlot>
          </div>
        </div>
        <div className={styles.contentmarketing}>
          <div className={styles.inner}>
            <p>
              Good content marketing provides the following: Ideas Inspiration
              Tips and tricks Education.
              <br />
              Consumers want transparency. They want to see who you really are.
              <br />
              Customers want to interact and get to know a brand. A company’s
              blog (or social accounts) can help show consumers who they really
              are.
              <br />
              They will not buy yor product till they engage with 100 pieces of
              content
            </p>
          </div>
         */}
      {/* <div className={styles.dslide}>
        <BlogSlide />
      </div> */}
      {/* <div className={styles.howblog}>
        <div className={styles.snippets}>
          <div className={styles.inner}>
            <h4>Rich Snippets</h4>
            <Image
              fluid={data.image17.childImageSharp.fluid}
              style={{ borderRadius: '10px', margin: '15px 0' }}
            />
            <p>
              {' '}
              Studies show that having a rich snippet can{' '}
              <b>increase click-through rates (CTR) by 677%</b> and drive 20-40%
              more traffic than product links without them.
            </p>
          </div>
        </div>
        <div className={styles.spee}>
          <div className={styles.inner}>
            <h4>Site Speed</h4>
            <p>
              <a
                href="https://developers.google.com/web/updates/2018/07/search-ads-speed"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'rgb(18, 147, 154)',
                  textDecoration: 'underline',
                }}
              >
                {' '}
                Google has indicated site speed
              </a>{' '}
              (and as a result, page speed) is one of the signals used by its
              algorithm to rank pages. And research has shown that Google might
              be specifically measuring time to first byte as when it considers
              page speed. In addition, a slow page speed means that search
              engines can crawl fewer pages using their allocated crawl budget,
              and this could negatively affect your indexation.
            </p>
            <div className={styles.speed}>
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
                        margin: '0 auto',
                      }}
                    >
                      <g class="fa-group">
                        <path
                          class="fa-secondary"
                          fill="white"
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
                    margin: '0 auto',
                  }}
                >
                  <g class="fa-group">
                    <path
                      class="fa-secondary"
                      fill="white"
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
                    background: 'white',
                    display: 'block',
                    'shape-rendering': 'auto',
                    position: 'absolute',
                    top: '10%',
                    left: '12px',
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
                      fill="#fe718d"
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
            <br />
            <p>
              Page speed is also important to user experience. Pages with a
              longer load time tend to have higher bounce rates and lower
              average time on page. Longer load times have also been shown to
              negatively affect conversions.
            </p>
            <div className={styles.bloggraph}>
              <FlexibleWidthXYPlot height={300} style={{ paddingTop: '10px' }}>
                <XAxis title={'Loading in seconds'} tickTotal={6} />
                <YAxis title={'Bounce Rate'} />
                <VerticalBarSeries data={speedData} />
              </FlexibleWidthXYPlot>
            </div>
          </div>
        </div>
        <div className={styles.socialsharing}>
          <div className={styles.inner}>
            <h4>Importance of social sharing</h4>
            <div className={styles.imagesharing}>
              <Image
                fluid={data.links.childImageSharp.fluid}
                style={{ marginBottom: '14px', borderRadius: '4px' }}
              />
            </div>
            <p>
              Social media is built for mass sharing. That's how social media
              affects SEO because all of this sharing adds up to more visibility
              for your content. If lots of people share your content on social
              media, then it's likely more people will link to it, and links ARE
              a hugely important SEO ranking factor.
            </p>
          </div>
        </div>
        <div className={styles.algodata}>
          <div className={styles.inner}>
            <h4>Search algorithm updates</h4>
            <p>
              Each year, Google makes hundreds of changes to search. In 2018,
              they reported an incredible 3,234 updates — an average of almost 9
              per day, and more than 8 times the number of updates in 2009.
              While most of these changes are minor, Google occasionally rolls
              out a major algorithmic update (such as Panda and Penguin) that
              affects search results in significant ways. For search marketers,
              knowing when major Google updates happened can help explain
              changes in rankings and organic website traffic and ultimately
              improve search engine optimization.
              <br />
              <br />
              you need to use web technologies that let you keep up to date with
              the search algorithm
            </p>
            <FlexibleWidthXYPlot height={300}>
              <XAxis title={'Year'} xType="time" tickTotal={6} />
              <YAxis title={'Number of Changes'} yDomain={[0, 4000]} />
              <LineSeries data={algoData} yDomain={[0, 4000]} />
            </FlexibleWidthXYPlot>
          </div>
        </div>
      </div> */}
      <Spring
        from={{ bottom: -1 }}
        to={{
          bottom: 50,
        }}
        config={config.slow}
        delay={12000}
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
                  <button
                    onClick={() => handleSubmit()}
                    className={styles.submitecom}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className={styles.submitecom}
                    style={{ opacity: '0.5' }}
                  >
                    Submit
                  </button>
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
      <Spring
        from={{ bottom: -50 }}
        to={{
          bottom: 0,
        }}
        config={config.slow}
        delay={12000}
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
                  <button
                    onClick={() => handleSubmit()}
                    className={styles.submitecom}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className={styles.submitecom}
                    style={{ opacity: '0.5' }}
                  >
                    Submit
                  </button>
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
    </div>
  )
}

export default BlogBody
