import React, { useState } from 'react'
import { CTABtn, CTAForm, CTAHeader, CTAImage, CTAText, Container, Inner } from './style'
import { useTransition, animated } from 'react-spring'
import { Button } from '../Button/Button'
import { StaticImage } from 'gatsby-plugin-image'

const Seocta = () => {
  return (
    <Container>
      <Inner>
        <CTAHeader>Get Started Today!</CTAHeader>
        <div>
          <CTAText>
            Don't let your competitors outrank you any longer. It's time to take
            control of your online presence and unleash the true potential of
            your business. Contact our SEO agency today for a free consultation.
            Together, we will craft an SEO strategy tailored to your unique
            goals and set you on the path to success.
          </CTAText>
          <CTAText>
            Our comprehensive analysis will provide you with a clear
            understanding of the strategies and investment required to achieve
            your goals.
          </CTAText>
        </div>
        <CTAForm>
        <form
          name="seocta"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          autocomplete="on"
        >
          <input type="hidden" name="form-name" value="seocta" />
          <div className="seocta">
            <label id="name">
              <div className="formitem">Name*</div>
              <input type="text" name="name" autocomplete="name" required />
            </label>
            <label>
              <div className="formitem">Email*</div>
              <input type="email" name="email" autocomplete="email" required />
            </label>
            <label>
              <div className="formitem">Company Name*</div>
              <input type="text" name="company" autocomplete="company" required minLength={4} />
            </label>
            <label>
              <div className="formitem">Message</div>
              <textarea name="message"></textarea>
            </label>
            <CTABtn type="submit">Get in touch</CTABtn>
          </div>
        </form>
        <CTAImage>
          <StaticImage src="../../images/form.jpg" alt="SEO CTA" style={{height: '100%'}} />
        </CTAImage>
        </CTAForm>
      </Inner>
    </Container>
  )
}

export default Seocta
