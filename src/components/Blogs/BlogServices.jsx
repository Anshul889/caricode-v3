import React from 'react'
import {
  Container,
  ServicesContainer,
  MobileImageContainer,
  Testimonials,
} from './style'
import { Link } from 'gatsby'
import { Button } from '../Button/Button'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageContainer, People, Person } from '../../styles/about-us'

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
              <b style={{ fontWeight: 700 }}>Link building:</b> Building links
              to your website from other high-quality websites is one of the
              most important off-page SEO factors. Links from other websites
              tell search engines that your website is authoritative and
              trustworthy.
            </li>
            <li>
              <b style={{ fontWeight: 700 }}>Guest blogging</b>: Guest blogging
              is a great way to build links to your website and establish
              yourself as an expert in your industry. When you guest blog, you
              can include a link back to your website in your author bio.
            </li>
            <li>
              <b style={{ fontWeight: 700 }}>Online PR</b>: Online PR can help
              to improve your website's reputation and authority. When you get
              your website mentioned in online publications, it tells search
              engines that your website is popular and well-respected.
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
      <Container>
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
      </Container>
      <Testimonials>
        <h2>
          Time Tested.<br />
          <i>Proven Results.</i>
        </h2>
        <People style={{marginBottom: '0px'}}>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/full.jpg"
                style={{ borderRadius: '50%', overflow: 'hidden' }}
              />
            </ImageContainer>
            <h4>Anshul Manaktala</h4>
            <h4>Full Stack Engineer</h4>
            <p>
              Full stack developer by day, pizza enthusiast by night 🍕
              Constantly learning, creating, and debugging. When in doubt, CTRL
              + ALT + DEL.
            </p>
          </Person>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/uiux.jpg"
                style={{ borderRadius: '50%' }}
              />
            </ImageContainer>
            <h4>Isha Sahota</h4>
            <h4>UI/UX Expert</h4>
            <p>
              UI/UX wizard, creating magic and sprinkling pixels to make the web
              a better place. Known to obsess over tiny details and make designs
              that pop! Also enjoys pizza and a good book. 🍕📚
            </p>
          </Person>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/backend.jpg"
                style={{ borderRadius: '50%' }}
              />
            </ImageContainer>
            <h4>Nitin Mander</h4>
            <h4>Backend Engineer</h4>
            <p>
              Backend engineer, keeping the internet running smoothly behind the
              scenes 🚀 Coffee-fueled problem solver, always optimizing and
              scaling systems. When not coding, probably playing video games 🎮
            </p>
          </Person>
          <Person>
            <ImageContainer>
              <StaticImage
                src="../images/database.jpg"
                style={{ borderRadius: '50%' }}
              />
            </ImageContainer>
            <h4>Atul Bahri</h4>
            <h4>Database Engineer</h4>
            <p>
              Data enthusiast with a love for databases 🤓 Optimizing queries
              and tweaking schemas to make the impossible possible. Also known
              to enjoy hiking and a good craft beer 🍺
            </p>
          </Person>
        </People>
      </Testimonials>
    </>
  )
}

export default BlogServices
