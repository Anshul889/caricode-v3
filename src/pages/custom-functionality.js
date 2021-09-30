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
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const CustomFunctionality = () => {
  return (
    <Layout>
      <Seo
        title={'Custom Functionality'}
        description="At CariCode we develop your website so it can be accessed seamlessly
       across different devices: phones, qphablets, tablets,
       laptops, desktops, and more."
        pathname="/custom-functionality"
        image="/images/image3.jpg"
        article={true}
        date={'2020-01-30'}
      />
      <Container>
        <Inner>
          <Content>
            <Heading>Custom Functionality</Heading>

            <p>
              We want you to have a successful online presence which means more
              than just a website. We offer a range of additional solutions
              customised to suit your needs.
            </p>
            <h4>Two of our key features are detailed below:</h4>
            <h4>Blogs</h4>
            <p>
              1. Blogging Helps Your Business to Compete: blogging is important
              to let consumers know how you are different.
            </p>
            <p>
              2. Blogging is Statistically Proven to Help Businesses
              <br />
              <br /> The custom content from blogs warms prospective customers
              up to your business. Businesses that blog generate more leads than
              businesses that don’t. Blogging can sometimes be just as effective
              in promoting your company than through advertisements.
            </p>
            <p>
              3. A Blog Provides a Channel of Communication with Customers:
              Creates a two-way interaction with your target audience. You can
              personalize your content and create a conversation with your
              customer
            </p>
            <p>
              4. A Blog Offers Insight Into Your Audience: Track user
              interaction such as likes, clicks, shares with your blog to get
              deeper insight on your customer. Customers can provide important
              feedback through your blog
            </p>
            <p>
              5. A Blog Can Improve Your SEO: Blogs improve your search engine
              ranking
            </p>
            <p>6. Blog Posts Provide Social Media Content</p>
            <p>
              7. A Business Blog Can Generate Leads: The blog layout we offer is
              optimized for actions that are important to your business.
            </p>
            <h4>Offline Support</h4>
            <p>
              Offline support and reliable performance is a critical feature of
              all the websites we built. Progressive Web Apps offer the most
              reliable offline support. This provides a significantly better
              user experience no matter where your customer is accessing your
              website.
            </p>
            <p>
              The quality of a network connection can be affected by a number of
              factors. Our goal is to provide a good experience that lessens the
              impact of changes in connectivity.
            </p>
          </Content>
          <Recommended>
            <Rec>
              <FirstItem>
                <Link to="/progressive-web-apps/">
                  <StaticImage src="../images/image8.jpg" />
                </Link>
                <h3>
                  <Link to="/progressive-web-apps/">Progressive Web Apps</Link>
                </h3>
                <p>
                  Mobile users are very goal-oriented. They expect to be able to
                  get what they need, immediately, and on their own terms.
                </p>
              </FirstItem>
              <SecondItem>
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
              </SecondItem>
            </Rec>
          </Recommended>
        </Inner>
      </Container>
    </Layout>
  )
}

export default CustomFunctionality
