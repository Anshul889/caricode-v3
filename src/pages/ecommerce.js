import React from 'react'
import * as styles from '../styles/ecommerce.module.css'
import EcommerceHero from '../components/Banners/Ecommerce/EcommerceHero'
import EcommerceTwoSelect from '../components/EcommerceSelect/EcommerceTwoSelect'
import Layout from '../components/Layout/Layout'
import {
  Card,
  Cards,
  Carousel,
  CarouselContainer,
  CarouselItem,
  Heading,
  Number,
} from '../styles/ecommerce-style'
import Seo from '../components/Seo/Seo'
import { StaticImage } from 'gatsby-plugin-image'

const Ecommerce = () => {
  return (
    <Layout>
       <Seo
        title={'Ecommerce'}
        description="At CariCode, we build blazing fast web applications to delight and retain users."
        pathname="/web-appications/"
        image="/images/image4.jpg"
        date={'2023-01-30'}
      />
      <EcommerceHero />
      <CarouselContainer>
        <h2>
          Deliver an amazing ecommerce experience to your customers. A small
          selection of our work
        </h2>
        <Carousel>
          <CarouselItem>
            <a href="https://luxxette.web.app" target="_blank" rel="noreferrer">
              <StaticImage src="../images/fashion.jpg"></StaticImage>
            </a>
            <p>Fashion</p>
          </CarouselItem>
          <CarouselItem>
            <a
              href="https://hola-bella-adbaa.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage src="../images/sports.jpg"></StaticImage>
            </a>
            <p>Jewellery</p>
          </CarouselItem>
          <CarouselItem>
            <a
              href="https://canopy-caricode.web.app"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage src="../images/jewellery.jpg"></StaticImage>
            </a>
            <p>Jewellery</p>
          </CarouselItem>
          <CarouselItem>
            <a
              href="https://beauty-caricode.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage src="../images/beauty.jpg"></StaticImage>
            </a>
            <p>Beauty</p>
          </CarouselItem>
          <CarouselItem>
            <StaticImage src="../images/food.jpg"></StaticImage>
            <p>Food</p>
          </CarouselItem>
          <CarouselItem>
            <StaticImage src="../images/home.jpg"></StaticImage>
            <p>Home</p>
          </CarouselItem>
          <div className={styles.nothing}></div>
        </Carousel>
      </CarouselContainer>
      <Cards>
        <Heading>Get started with 3 easy steps</Heading>
        <Card>
          <Number>1</Number>
          <h4>Base Features</h4>
          <p>
            Starter pack with base features including a responsive website to
            feature unlimited products with payment support
          </p>
        </Card>
        <Card>
          <Number>2</Number>
          <h4>Choose Additional Features</h4>
          <p>
            To take your ecommerce app to the next level choose from a range
            from of features including Email Marketing, Search Engine
            Optimization and Social
          </p>
        </Card>
        <Card>
          <Number>3</Number>
          <h4>Hit Submit</h4>
          <p>
            Confirm your order and we take care of the rest, providing end to
            end support
          </p>
        </Card>
      </Cards>
      <EcommerceTwoSelect />
    </Layout>
  )
}

export default Ecommerce
