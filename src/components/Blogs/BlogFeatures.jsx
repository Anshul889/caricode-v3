import React, { useState } from 'react'
import {
  BlogCard,
  BlogCards,
  Buttons,
  Container,
  Description,
  Filter,
  Numbers,
  Sort,
  Stats,
  Title,
} from './style'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { Button } from '../Button/Button'
import thumbs from '../../images/thumbs-up-white.svg'
import comments from '../../images/comment-light.svg'
import share from '../../images/share-light.svg'
import bookmark from '../../images/bookmark-light.svg'

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
  let initialPosts = [
    {
      id: 1,
      title: 'First Post',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 6,
      likes: 23,
      bookmark: false,
      src: data.image5.childImageSharp.fluid,
      comments: 212,
      author: 'Caricode',
      category: 'Design',
    },
    {
      id: 2,
      title: 'Second Post',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 4,
      likes: 55,
      bookmark: false,
      comments: 190,
      src: data.image6.childImageSharp.fluid,
      author: 'Caricode',
      category: 'Tech',
    },
    {
      id: 3,
      title: 'Third Post',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 2,
      likes: 6,
      bookmark: false,
      comments: 243,
      src: data.image7.childImageSharp.fluid,
      author: 'Caricode',
      category: 'Marketing',
    },
  ]
  const [posts, setPosts] = useState(initialPosts)
  const [sortBy, setActiveSort] = useState('none')

  const [filter, setFilter] = useState('none')

  const sortNew = () => {
    let sortedAsc = [...initialPosts].sort(function (a, b) {
      var x = a.date
      var y = b.date
      if (x > y) {
        return 1
      }
      if (x < y) {
        return -1
      }
      return 0
    })
    setPosts(sortedAsc)
    setActiveSort('sortNew')
    setFilter('none')
  }

  const sortOld = () => {
    let sortedDsc = [...initialPosts].sort(function (a, b) {
      var x = a.date
      var y = b.date
      if (x > y) {
        return -1
      }
      if (x < y) {
        return 1
      }
      return 0
    })
    setPosts(sortedDsc)
    setActiveSort('sortOld')
    setFilter('none')
  }

  const sortAscLikes = () => {
    let sortedAscLikes = [...initialPosts].sort(function (a, b) {
      var x = a.likes
      var y = b.likes
      if (x > y) {
        return 1
      }
      if (x < y) {
        return -1
      }
      return 0
    })
    setPosts(sortedAscLikes)
    setActiveSort('sortAscLikes')
    setFilter('none')
  }

  const sortDscLikes = () => {
    let sortedDscLikes = [...initialPosts].sort(function (a, b) {
      var x = a.likes
      var y = b.likes
      if (x > y) {
        return -1
      }
      if (x < y) {
        return 1
      }
      return 0
    })
    setPosts(sortedDscLikes)
    setActiveSort('sortDscLikes')
    setFilter('none')
  }

  const sortAscComments = () => {
    let sortedAscComments = [...initialPosts].sort(function (a, b) {
      var x = a.comments
      var y = b.comments
      if (x > y) {
        return 1
      }
      if (x < y) {
        return -1
      }
      return 0
    })
    setPosts(sortedAscComments)
    setActiveSort('sortAscComments')
    setFilter('none')
  }

  const sortDscComments = () => {
    let sortedDscComments = [...initialPosts].sort(function (a, b) {
      var x = a.comments
      var y = b.comments
      if (x > y) {
        return -1
      }
      if (x < y) {
        return 1
      }
      return 0
    })
    setPosts(sortedDscComments)
    setActiveSort('sortDscComments')
    setFilter('none')
  }

  const filterCategory = (category) => {
    let filtered = [...initialPosts.filter((post) => post.category == category)]
    setPosts(filtered)
    setFilter(category)
    setActiveSort('none')
  }

  const removeFilter = () => {
    setFilter('none')
    setPosts(initialPosts)
  }

  return (
    <Container>
      <h2>Main section of blog Features</h2>
      <Description>
        Filters and sorting. Make it easy for you followers to filter and sort
        through blog posts
      </Description>
      <Sort>
        <h3>Sort</h3>
        <Buttons>
          {/* sort by date */}
          {sortBy !== 'sortNew' && sortBy !== 'sortOld' && (
            <Button onClick={() => sortNew()} secondary>
              Date
            </Button>
          )}
          {sortBy === 'sortNew' && (
            <Button onClick={() => sortOld()}>Date &#8593;</Button>
          )}
          {sortBy === 'sortOld' && (
            <Button onClick={() => sortNew()}>Date &#8595;</Button>
          )}

          {/* sort by likes */}

          {sortBy !== 'sortAscLikes' && sortBy !== 'sortDscLikes' && (
            <Button onClick={() => sortDscLikes()} secondary>
              Likes
            </Button>
          )}
          {sortBy === 'sortDscLikes' && (
            <Button onClick={() => sortAscLikes()}>Likes &#8593;</Button>
          )}
          {sortBy === 'sortAscLikes' && (
            <Button onClick={() => sortDscLikes()}>Likes &#8595;</Button>
          )}

          {sortBy !== 'sortAscComments' && sortBy !== 'sortDscComments' && (
            <Button onClick={() => sortDscComments()} secondary>
              Comments
            </Button>
          )}
          {sortBy === 'sortDscComments' && (
            <Button onClick={() => sortAscComments()}>Comments &#8593;</Button>
          )}
          {sortBy === 'sortAscComments' && (
            <Button onClick={() => sortDscComments()}>Comments &#8595;</Button>
          )}
        </Buttons>
      </Sort>
      <Filter>
        <h3>Filter</h3>
        <Buttons>
          {filter !== 'Tech' && (
            <Button onClick={() => filterCategory('Tech')} secondary>
              Tech
            </Button>
          )}
          {filter === 'Tech' && (
            <Button onClick={() => removeFilter()}>Tech</Button>
          )}
           {filter !== 'Design' && (
            <Button onClick={() => filterCategory('Design')} secondary>
              Design
            </Button>
          )}
          {filter === 'Design' && (
            <Button onClick={() => removeFilter()}>Design</Button>
          )}
           {filter !== 'Marketing' && (
            <Button onClick={() => filterCategory('Marketing')} secondary>
              Marketing
            </Button>
          )}
          {filter === 'Marketing' && (
            <Button onClick={() => removeFilter()}>Marketing</Button>
          )}
        </Buttons>
      </Filter>

      <BlogCards>
        {posts.map((post) => {
          return (
            <BlogCard>
              <Image fluid={post.src} />
              <Stats>
                <img src={thumbs} />
                <img src={comments} />
                <img src={share} />
                <img src={bookmark} />
              </Stats>
              <h3>{post.title}</h3>
              <Title>
                <span>Author: {post.author}</span>
                <span>{post.date} days ago</span>
                <span>{post.category}</span>
              </Title>
              <p>{post.excerpt}</p>
              <Numbers>
                <div>{post.likes} likes</div>
                <div>{post.comments} comments</div>
              </Numbers>
            </BlogCard>
          )
        })}
      </BlogCards>
    </Container>
  )
}

export default BlogFeatures
