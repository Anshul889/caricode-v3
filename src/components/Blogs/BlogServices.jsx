import React from 'react'
import {
  Container,
  ServicesContainer,
  MobileImageContainer,
  Testimonials,
  TestPerson,
  TestPeople,
} from './style'
import { Link } from 'gatsby'
import { Button } from '../Button/Button'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageContainer, People, Person } from '../../styles/about-us'
import Contact from '../Contact/Contact'

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
      <Testimonials>
        <h2>
          Time Tested.
          <br />
          <i>Proven Results.</i>
        </h2>
        <TestPeople>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/full.jpg"
                style={{ borderRadius: '50%', overflow: 'hidden' }}
              />
            </ImageContainer>
            <h4>Anand Garde</h4>
            <p>
              "I was looking for a web development agency that could help me
              create a new website for my business. They listened to my ideas and took the time to
              understand what I was looking for. They also offered me some great
              suggestions that I hadn't even thought of. The end result is a
              website that I'm absolutely thrilled with."
            </p>
          </Person>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/uiux.jpg"
                style={{ borderRadius: '50%' }}
              />
            </ImageContainer>
            <h4>Usha Mathew</h4>
            <p>
              "I had a great experience working with Caricode. They were
              very professional and easy to work with. They listened to my ideas
              and created a website that exceeded my expectations. I would
              definitely recommend them to anyone looking for a web development
              agency."
            </p>
          </Person>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/backend.jpg"
                style={{ borderRadius: '50%' }}
              />
            </ImageContainer>
            <h4>Raghavan Chandra</h4>
            <p>
              "I was very happy with the work that Caricode did on my
              website. They were very professional and efficient, and they
              always kept me updated on the progress of the project. I would
              definitely recommend them to anyone looking for a web development
              agency."
            </p>
          </Person>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/database.jpg"
                style={{ borderRadius: '50%' }}
              />
            </ImageContainer>
            <h4>Megha Chowdhury</h4>
            <p>
              "I was very impressed with the work that Caricode did on my
              website. They were able to take my ideas and turn them into a
              beautiful and functional website that I'm very proud of. I would
              definitely recommend them to anyone looking for a web development
              agency."🍺
            </p>
          </Person>
        </TestPeople>
      </Testimonials>
      <Contact />
    </>
  )
}

export default BlogServices
