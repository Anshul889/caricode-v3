import React from 'react'
import {
  Container,
  ServicesContainer,
  MobileImageContainer,
  Testimonials,
  TestPerson,
  TestPeople,
  Provided,
  Feature,
  FeatureImage,
  FeatureList,
  FeatureText,
  ServiceList,
} from './style'
import { Link } from 'gatsby'
import { Button } from '../Button/Button'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageContainer, People, Person } from '../../styles/about-us'
import Contact from '../Contact/Contact'
import browser from '../../images/browser.svg'
import user from '../../images/user-tie.svg'
import pencil from '../../images/pencil.svg'
import compass from '../../images/compass-drafting.svg'
import link from '../../images/link.svg'
import keyword from '../../images/print-magnifying-glass.svg'
import Seocta from '../Seocta/Seocta'

const BlogServices = () => {
  return (
    <>
      <Container>
        <h2>Off-Page SEO</h2>
        <ServicesContainer>
          <MobileImageContainer>
            <StaticImage
              aspectRatio={16 / 9}
              src="../../images/image22.jpg"
              alt="Off page seo"
            />
          </MobileImageContainer>

          <ul>
            <li>
              <b style={{ fontWeight: 700, color: 'black' }}>Link building:</b>{' '}
              Building links to your website from other high-quality websites is
              one of the most important off-page SEO factors. Links from other
              websites tell search engines that your website is authoritative
              and trustworthy.
            </li>
            <li>
              <b style={{ fontWeight: 700, color: 'black' }}>Guest blogging</b>:
              Guest blogging is a great way to build links to your website and
              establish yourself as an expert in your industry. When you guest
              blog, you can include a link back to your website in your author
              bio.
            </li>
            <li>
              <b style={{ fontWeight: 700, color: 'black' }}>Online PR</b>:
              Online PR can help to improve your website's reputation and
              authority. When you get your website mentioned in online
              publications, it tells search engines that your website is popular
              and well-respected.
            </li>
          </ul>

          <p>
            Off-page SEO can be a complex and time-consuming process, but it can
            be very effective in improving your website's ranking in SERPs. Our
            team of SEO experts will work with you to develop an off-page SEO
            strategy that will help you achieve your goals.
          </p>
        </ServicesContainer>
      </Container>
      {/* <Container>
        <h2>Why choose our agency for your web development needs?</h2>
        <ServicesContainer>
          <ul>
            <li>
              Expertise: Our team has years of experience developing
              high-quality websites for clients across a wide range of
              industries.
            </li>
            <li>
              Customization: We don't believe in one-size-fits-all solutions.
              We'll work with you to understand your unique needs and craft a
              website that reflects your brand's personality and goals.
            </li>
            <li>
              Results: We're committed to delivering blogs that drive real
              results for your business, from increased traffic and engagement
              to higher conversion rates.
            </li>
            <li>
              Support: We'll be with you every step of the way, from initial
              development to ongoing maintenance and updates.
            </li>
          </ul>

          <p>
            Don't settle for a mediocre website that fails to capture your
            brand's true essence. Choose our Web Development Agency for
            high-quality web development that truly sets you apart from the
            competition. Contact us today to learn more about our services and
            start building your dream website.
          </p>
        </ServicesContainer>
      </Container> */}
      <Provided>
        <h2>Services we provide</h2>
        <ServiceList>
          <Feature>
            <FeatureImage>
              <img src={browser} style={{ position: 'relative', top: '2px' }} />
            </FeatureImage>
            <FeatureText>Comprehensive Web development</FeatureText>
          </Feature>
          <Feature>
            <FeatureImage>
              <img src={compass} style={{ position: 'relative', top: '2px' }} />
            </FeatureImage>
            <FeatureText>Web design and User Expereince</FeatureText>
          </Feature>
          <Feature>
            <FeatureImage>
              <img src={link} style={{ position: 'relative', top: '2px' }} />
            </FeatureImage>
            <FeatureText>Link Building</FeatureText>
          </Feature>
          <Feature>
            <FeatureImage>
              <img src={pencil} style={{ position: 'relative', top: '2px' }} />
            </FeatureImage>
            <FeatureText>Blog content creation</FeatureText>
          </Feature>
          <Feature>
            <FeatureImage>
              <img src={user} style={{ position: 'relative', top: '2px' }} />
            </FeatureImage>
            <FeatureText>Guest Posting</FeatureText>
          </Feature>
          <Feature>
            <FeatureImage>
              <img src={keyword} style={{ position: 'relative', top: '2px' }} />
            </FeatureImage>
            <FeatureText>Keyword Research</FeatureText>
          </Feature>
        </ServiceList>
      </Provided>
      <Testimonials>
        <h2>
          Time Tested.
          <br />
          <i>Proven Results.</i>
        </h2>
        <TestPeople>
          <Person>
            <h4>Anand Garde</h4>
            <p>
              "As a small business owner, I was struggling to compete in the
              crowded online marketplace. However, since partnering with
              Caricode, my website's performance has seen a remarkable
              transformation."
            </p>
          </Person>
          <Person>
            <h4>Usha Mathew</h4>
            <p>
              "I had a great experience working with Caricode. They were very
              professional and easy to work with. They listened to my ideas and
              created a website that exceeded my expectations. I would
              definitely recommend them to anyone looking for a web development
              agency."
            </p>
          </Person>
          <Person>
            <h4>Raghavan Chandra</h4>
            <p>
              "I was looking for a web development agency that could help me
              create a new website for my business. They listened to my ideas
              and took the time to understand what I was looking for. They also
              offered me some great suggestions that I hadn't even thought of.
              The end result is a website that I'm absolutely thrilled with."
            </p>
          </Person>
          <Person>
            <h4>Megha Chowdhury</h4>
            <p>
              "I was very impressed with the work that Caricode did on my
              website. They were able to take my ideas and turn them into a
              beautiful and functional website that I'm very proud of. I would
              definitely recommend them to anyone looking for a web development
              agency."
            </p>
          </Person>
        </TestPeople>
      </Testimonials>
      <Seocta />
    </>
  )
}

export default BlogServices
