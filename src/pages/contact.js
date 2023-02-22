import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button/Button'
import Contact from '../components/Contact/Contact'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'

const contact = () => {
  const Address = styled.div`
    margin: 20px auto;
    width: 90%;
    max-width: 1200px;
  `
  const GetDirections = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
  `

  return (
    <Layout>
      <Seo
        title={'Contact'}
        description="Contact Page"
        pathname="/web-appications/"
        image="/images/image4.jpg"
        date={'2023-01-30'}
      />
      <Contact />
      <Address>
        Address: 1st floor, 264-265, Dr. Annie Besant Road, Worli Mumbai, MH
        400030
      </Address>
      <GetDirections>
        <a href="https://www.google.com/maps/place/Caricode/@19.01209654602322,72.82136279648786,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c991b19ae605:0xe831624218e9e749!8m2!3d19.0587205!4d72.8651385">
          <Button>Get Directions</Button>
        </a>
      </GetDirections>
    </Layout>
  )
}

export default contact 
