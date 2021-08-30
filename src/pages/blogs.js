import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo/Seo'
import { main } from '../styles/blogs.module.css'
import BlogHero from '../components/Banners/Blogs/BlogHero'
import BlogBody from '../components/Blogs/BlogBody'

const Blogs = () => {
  return (
    <Layout>
      <SEO
        title={'Blog Development and Best SEO practices'}
        description="At CariCode, we build blazing fast blogs to delight and retain users."
        pathname="/blogs/"
        image="/images/image4.jpg"
        date={'2020-01-30'}
      />
      <div className={main}>
        <BlogHero />
        <BlogBody />
      </div>
    </Layout>
  )
}

export default Blogs
