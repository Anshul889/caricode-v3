import React, { useState } from 'react'
import { BlogCard, BlogCards, Card, Cards, Container, Description, Title } from './style'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    image5: file(relativePath: { eq: "image5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "image6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "image7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BlogFeatures = () => {
  const data = useStaticQuery(getImages)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '6',
      likes: 23,
      bookmark: false,
      src: data.image5.childImageSharp.fluid,
      comments: 212,
      author: 'Caricode',
    },
    {
      id: 2,
      title: 'Second Post',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '4',
      likes: 55,
      bookmark: false,
      comments: 190,
      src: data.image6.childImageSharp.fluid,
      author: 'Caricode',
    },
    {
      id: 3,
      title: 'Third Post',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2',
      likes: 6,
      bookmark: false,
      comments: 243,
      src: data.image7.childImageSharp.fluid,
      author: 'Caricode',
    },
  ])

  return (
    <Container>
      <h2>Main section of blog Features</h2>
      <Description>Filters and sorting. Make it easy for you followers to filter and sort through blog posts</Description>
      <BlogCards>
        {posts.map((post) => {
          return (
            <BlogCard>
              <Image fluid={post.src} />
              <h3>{post.title}</h3>
              <Title>
                <span>Author: {post.author}</span>
                <span>{post.date} days ago</span>
              </Title>
              <p>{post.excerpt}</p>
            </BlogCard>
          )
        })}
      </BlogCards>
    </Container>
  )
}

export default BlogFeatures
