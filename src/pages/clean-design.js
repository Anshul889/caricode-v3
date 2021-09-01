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
import styled from 'styled-components'

const OneImage = styled.div`
  width: 60%;
  grid-template-columns: 1fr;
  grid-gap: 0px;
  display: grid;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    width: 30%;
  }
`

const TwoImages = styled(OneImage)`
  @media screen and (min-width: 600px) {
    width: 60%;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
  }
`

const CleanDesign = () => {
  return (
    <Layout>
      <SEO
        title={'Clean Design'}
        description="48% of people determine the
        credibility of a business by its website design. Mobile users are
        goal-oriented. Speed is important and they expect to get what they
        need, instantaneously."
        pathname="/clean-design"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <Container>
        <Inner>
          <Content>
            <Heading>Clean Design</Heading>

            <p>
              At CariCode we believe simple designs are better. According to
              research published by Blue Corona, 48% of people determine the
              credibility of a business by its website design. Mobile users are
              goal-oriented. Speed is important and they expect to get what they
              need, instantaneously.
            </p>
            <h4>
              At CariCode every website we create is based on these important
              principles:
            </h4>
            <h4>1. Home page and site navigation</h4>
            <OneImage>
              <StaticImage src="../images/image10.png" />
            </OneImage>
            <p>
              Make secondary tasks available through menus or “below the fold”
              Your mobile homepage should be focused on connecting users to the
              content they’re looking for. Our goal while designing navigation
              us for new and returning users to be able to figure out how to
              reach your digital product easily and efficiently.
            </p>
            <h4>2. Keep Menus Short and Sweet</h4>
            <OneImage>
              <StaticImage src="../images/image9.png" />
            </OneImage>
            <p>
              Mobile users don’t like to scroll through a long list of options
              to find what they want. Reorganize your menu to use as few items
              as possible, while maintaining key functionality
            </p>
            <h4>3. Make it easy to get back to the home page</h4>
            <OneImage>
              <StaticImage src="../images/image10.png" />
            </OneImage>
            <p>
              Users expect to go back to the homepage when they tap the logo in
              the top-left of a mobile page, and they become frustrated when it
              isn’t available or doesn’t work.
            </p>
            <h4>4. Commerce and Conversion</h4>
            <TwoImages>
              <StaticImage src="../images/image11.png" />
              <StaticImage src="../images/image12.png" />
            </TwoImages>
            <p>
              Understand your customer journeys and let users convert on their
              own terms.Let users explore before they commit
            </p>
            <h4>5. Calls to Action</h4>
            <TwoImages>
              <StaticImage src="../images/image13.png" />
              <StaticImage src="../images/image14.png" />
            </TwoImages>

            <p>Keep calls to action front and center.</p>
          </Content>
          <Recommended>
            <Rec>
              <FirstItem>
                <Link to="/multi-device-support">
                  <StaticImage src="../images/image5.jpg" />
                </Link>
                <h3>
                  <Link to="/clean-design">Clean Design</Link>
                </h3>
                <p>
                  Mobile users are very goal-oriented. They expect to be able to
                  get what they need, immediately, and on their own terms.
                </p>
              </FirstItem>
              <SecondItem>
                <Link to="/customised-functionality">
                  <StaticImage src="../images/image6.jpg" />
                </Link>
                <h3>
                  <Link to="/custom-functionality">Custom Functionality</Link>
                </h3>
                <p>
                  Custom Navigation for the Web and Mobile, Authentications,
                  Blog, Offline support, Easily manage your content
                </p>
              </SecondItem>
            </Rec>
          </Recommended>
        </Inner>
      </Container>
    </Layout>
  )
}

export default CleanDesign
