import React from 'react'
import { Container, ServicesContainer, MobileImageContainer } from './style'
import { Link } from 'gatsby'
import { Button } from '../Button/Button'
import { StaticImage } from 'gatsby-plugin-image'

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
              high-quality websites for clients across a wide range of industries.
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
          <Link to="/contact/" full>
            <Button>Contact Us</Button>
          </Link>
        </ServicesContainer>
      </Container>
    </>
  )
}

export default BlogServices
