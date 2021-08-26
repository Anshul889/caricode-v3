import React from 'react'
import * as styles from '../styles/ecommerce.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import EcommerceHero from '../components/Banners/Ecommerce/EcommerceHero'
import EcommerceTwoSelect from '../components/EcommerceSelect/EcommerceTwoSelect'
import Layout from '../components/Layout/Layout'

const getImages = graphql`
  {
    image: file(relativePath: { eq: "handshake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fashion: file(relativePath: { eq: "fashion.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jewellery: file(relativePath: { eq: "jewellery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beauty: file(relativePath: { eq: "beauty.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    food: file(relativePath: { eq: "food.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    home: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sports: file(relativePath: { eq: "sports.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Ecommerce = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <div className={styles.ecombody}>
        <EcommerceHero />
        <div className={styles.carouselcontainer}>
          <h4>
            Deliver an amazing ecommerce experience to your customers. A small
            selection of our work
          </h4>
          <div className={styles.ecomcarousel}>
            <div className={styles.carouselitem}>
              <a
                href="https://luxxette.web.app"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  fluid={data.fashion.childImageSharp.fluid}
                  style={{ borderRadius: '4px' }}
                  className={styles.carouselimage}
                />
              </a>
              <p>Fashion</p>
            </div>
            <div className={styles.carouselitem}>
              <a
                href="https://hola-bella-adbaa.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  fluid={data.sports.childImageSharp.fluid}
                  style={{ borderRadius: '4px' }}
                  className={styles.carouselimage}
                />
              </a>
              <p>Jewellery</p>
            </div>
            <div className={styles.carouselitem}>
              <a
                href="https://canopy-caricode.web.app"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  fluid={data.jewellery.childImageSharp.fluid}
                  style={{ borderRadius: '4px' }}
                  className={styles.carouselimage}
                />
              </a>
              <p>Jewellery</p>
            </div>
            <div className={styles.carouselitem}>
              <a
                href="https://beauty-caricode.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  fluid={data.beauty.childImageSharp.fluid}
                  style={{ borderRadius: '4px' }}
                  className={styles.carouselimage}
                />
              </a>
              <p>Beauty</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.food.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Food</p>
            </div>
            <div className={styles.carouselitem}>
              <Image
                fluid={data.home.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
                className={styles.carouselimage}
              />
              <p>Home</p>
            </div>
            <div className={styles.nothing}></div>
          </div>
        </div>
        <div className={styles.cardsection}>
          <h4>Get started with 3 easy steps</h4>
          <div className={styles.card}>
            <div className={styles.number}>1</div>
            <h4>Base Features</h4>
            <p>
              Starter pack with base features including a responsive website to
              feature unlimited products with payment support
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>2</div>
            <h4>Choose Additional Features</h4>
            <p>
              To take your ecommerce app to the next level choose from a range
              from of features including Email Marketing, Search Engine
              Optimization and Social
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>3</div>
            <h4>Hit Submit</h4>
            <p>
              Confirm your order and we take care of the rest, providing end to
              end support
            </p>
          </div>
        </div>
        <EcommerceTwoSelect />
      </div>
    </Layout>
  )
}

export default Ecommerce
