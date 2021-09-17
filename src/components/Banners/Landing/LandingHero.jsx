import React from 'react'
import * as styles from './LandingHero.module.css'
import { graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    image3: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LandingHero = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={styles.banner}>
      <div className={styles.bannerimage}>
        <Image
          fluid={data.image3.childImageSharp.fluid}
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          className={styles.image}
        />
      </div>
      <div className={styles.filter}></div>
      <div className={styles.herotext}>
        <h1>Landing Pages built with a goal to drive call to action</h1>
      </div>
    </div>
  )
}

export default LandingHero
