import React from 'react'
import SEO from '../components/Seo/Seo'
import { Heading2 } from '../components/Contact/style'
import Layout from '../components/Layout/Layout'
import { Principles, PrinciplesHeading } from '../styles/uiux-style'
import { ImageContainer, People, Person, Story } from '../styles/about-us'
import { StaticImage } from 'gatsby-plugin-image'

const AboutUs = () => {
  return (
    <Layout>
      <SEO
        title={'About Us'}
        description="At CariCode, we build blazing fast web applications to delight and retain users."
        pathname="/about-us/"
        image="/images/image4.jpg"
        date={'2023-01-30'}
      />
      <div>
        <PrinciplesHeading>
          <h2>Our Team</h2>
          <People>
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
                Constantly learning, creating, and debugging. When in doubt,
                CTRL + ALT + DEL.
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
                UI/UX wizard, creating magic and sprinkling pixels to make the
                web a better place. Known to obsess over tiny details and make
                designs that pop! Also enjoys pizza and a good book. 🍕📚
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
                Backend engineer, keeping the internet running smoothly behind
                the scenes 🚀 Coffee-fueled problem solver, always optimizing
                and scaling systems. When not coding, probably playing video
                games 🎮
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
        </PrinciplesHeading>
        <Story>
          <h2>Our Story</h2>
          <p>
            Our story began with a simple idea: to create beautiful, functional
            websites that help businesses succeed online. As a team of
            passionate web developers and designers, we knew that the internet
            was a powerful tool for connecting people and driving growth, but we
            also knew that many businesses were struggling to make the most of
            it.
            <br />
            <br /> So, we set out to change that. We founded our company with
            the goal of providing affordable, high-quality web development
            services to businesses of all sizes.
            <br />
            <br />
            We started small, taking on projects one by one and building our
            reputation through word-of-mouth recommendations. But as our skills
            and portfolio grew, so did our client base. Today, we are proud to
            work with some of the biggest names in India and beyond, helping
            them achieve their online goals and reach their audiences in new and
            exciting ways.
            <br />
            <br /> But no matter how big or small the project, our approach has
            always remained the same: we listen to our clients' needs and goals,
            and we work with them to create customized solutions that meet their
            unique requirements. We believe that every business is different,
            and we take pride in our ability to tailor our services to fit their
            individual needs.
            <br />
            <br /> Our team is made up of some of the most talented web
            developers and designers in Mumbai, and we are constantly learning
            and evolving to stay ahead of the curve. We keep up with the latest
            trends and technologies, and we are always pushing ourselves to
            create innovative solutions that help our clients stand out in a
            crowded online marketplace. <br />
            <br /> At our core, we are passionate about what we do. We love
            creating beautiful, functional websites that help businesses succeed
            online, and we are committed to providing the highest level of
            service and support to our clients. We believe that our success is
            only possible because of our clients' success, and we are honored to
            be a part of their journey. Thank you for choosing our web
            development company based in Mumbai. We look forward to working with
            you and helping you achieve your online goals!
          </p>
        </Story>
      </div>
    </Layout>
  )
}

export default AboutUs
