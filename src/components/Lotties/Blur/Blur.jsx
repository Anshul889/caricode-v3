import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './Blur.module.css'

const ImageDiv = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`

const getImages = graphql`
  {
    image: file(relativePath: { eq: "dog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Blur = () => {
  const data = useStaticQuery(getImages)
  return (
    <ImageDiv>
      <Img fluid={data.image.childImageSharp.fluid} className={styles.blurimage} />
    </ImageDiv>
  )
}

export default Blur
