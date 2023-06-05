import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'
import { main } from '../styles/blogs.module.css'
import BlogHero from '../components/Banners/Blogs/BlogHero'
import BlogBody from '../components/Blogs/BlogBody'

const Blogs = () => {
  return (
    <Layout>
      <Seo
        title={
          'SEO Agency: Get Found on Google and Other Search Engines with Our Proven SEO Services'
        }
        description="Improve your website's search engine ranking and visibility with our on page and off page SEO services. We have a team of experienced SEO experts who will work with you to develop a customized SEO strategy that meets your specific needs. Our services include keyword research, content optimization, link building, and more. Contact us today to learn more about how we can help you improve your website's SEO."
        pathname="/seo/"
        image="/images/seo-image.jpg"
        date={'2023-06-01'}
      />
      <div className={main}>
        <BlogHero />
        <BlogBody />
      </div>
    </Layout>
  )
}

export default Blogs
