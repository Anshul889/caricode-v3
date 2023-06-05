import React from 'react'
import { Container, ServicesContainer } from './style'
import { Link } from 'gatsby'
import { Button } from '../Button/Button'

const BlogServices = () => {
  return (
    <Container>
      <h2>Why choose our agency for your blog development needs?</h2>
      <ServicesContainer>
      <ul>
        <li>
          Expertise: Our team has years of experience developing high-quality
          blogs for clients across a wide range of industries.
        </li>
        <li>
          Customization: We don't believe in one-size-fits-all solutions. We'll
          work with you to understand your unique needs and craft a blog that
          reflects your brand's personality and goals.
        </li>
        <li>
          Results: We're committed to delivering blogs that drive real results
          for your business, from increased traffic and engagement to higher
          conversion rates.
        </li>
        <li>
          Support: We'll be with you every step of the way, from initial
          development to ongoing maintenance and updates.
        </li>
      </ul>

      <p>
        Don't settle for a mediocre website that fails to capture your brand's true
        essence. Choose our Web Development Agency for high-quality web
        development that truly sets you apart from the competition. Contact us
        today to learn more about our services and start building your dream
        website.
      </p>
      <Link to='/contact/' full><Button>Contact Us</Button></Link>
      </ServicesContainer>
    </Container>
  )
}

export default BlogServices
