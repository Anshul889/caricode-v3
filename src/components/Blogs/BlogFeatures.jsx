import React, { useState } from 'react'
import {
  BlogCard,
  BlogCards,
  Buttons,
  CBFeature,
  CBImage,
  CBText,
  ChatBotFeatures,
  ChatBotSection,
  Container,
  Description,
  DesktopContainer,
  Ditem,
  Excerpt,
  Feature,
  FeatureImage,
  FeatureList,
  FeatureText,
  Filter,
  MobileContainer,
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
import penruler from '../../images/pen-ruler.svg'
import database from '../../images/database.svg'
import bolt from '../../images/bolt.svg'
import clock from '../../images/clock.svg'
import braincircuit from '../../images/brain-circuit.svg'
import userheadset from '../../images/user-headset.svg'
import Chat from '../Chat/Chat'

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
      src: data.image6.childImageSharp.fluid,
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
      src: data.image5.childImageSharp.fluid,
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
    <>
      <Container>
        <h2>Critical Features</h2>
        <Description>
          Make it easy for you followers to filter and sort through web pages
        </Description>
        <Sort>
          <h3>Sort</h3>
          <Buttons>
            {/* sort by date */}
            {sortBy !== 'sortNew' && sortBy !== 'sortOld' && (
              <Button onClick={() => sortNew()} filters>
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
              <Button onClick={() => sortDscLikes()} filters>
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
              <Button onClick={() => sortDscComments()} filters>
                Comments
              </Button>
            )}
            {sortBy === 'sortDscComments' && (
              <Button onClick={() => sortAscComments()}>
                Comments &#8593;
              </Button>
            )}
            {sortBy === 'sortAscComments' && (
              <Button onClick={() => sortDscComments()}>
                Comments &#8595;
              </Button>
            )}
          </Buttons>
        </Sort>
        <Filter>
          <h3>Filter</h3>
          <Buttons>
            {filter !== 'Tech' && (
              <Button onClick={() => filterCategory('Tech')} filters>
                Tech
              </Button>
            )}
            {filter === 'Tech' && (
              <Button onClick={() => removeFilter()}>Tech</Button>
            )}
            {filter !== 'Design' && (
              <Button onClick={() => filterCategory('Design')} filters>
                Design
              </Button>
            )}
            {filter === 'Design' && (
              <Button onClick={() => removeFilter()}>Design</Button>
            )}
            {filter !== 'Marketing' && (
              <Button onClick={() => filterCategory('Marketing')} filters>
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
                <div>
                  <Stats>
                    <img src={thumbs} />
                    <img src={comments} />
                    <img src={share} />
                    <img src={bookmark} />
                  </Stats>
                  <h3>{post.title}</h3>
                  <Title>
                    <span>{post.author}</span>
                    <span>{post.date}d ago</span>
                    <span>{post.category}</span>
                  </Title>
                  <Excerpt>{post.excerpt}</Excerpt>
                  <Numbers>
                    <div>{post.likes} likes</div>
                    <div>{post.comments} comments</div>
                  </Numbers>
                </div>
              </BlogCard>
            )
          })}
        </BlogCards>
        <MobileContainer>
          <Description>Custom Chat Bots</Description>
          <ChatBotSection>
            <div style={{height: '900px'}}>
              <p style={{ color: '#444' }}>
                Utilize the power of interactive conversation to captivate your
                audience. With its intelligent and natural language processing
                capabilities, it engages visitors in meaningful and personalized
                interactions, keeping them hooked and eager to explore more.
              </p>
              <Chat />
            </div>
            <FeatureList full>
              <Feature>
                <FeatureImage>
                  <img src={braincircuit} />
                </FeatureImage>
                <FeatureText>Intelligent and Conversational</FeatureText>
              </Feature>
              <Feature>
                <FeatureImage>
                  <img src={database} />
                </FeatureImage>
                <FeatureText>Data Driven Insights</FeatureText>
              </Feature>
              <Feature>
                <FeatureImage>
                  <img src={bolt} />
                </FeatureImage>
                <FeatureText>Seamless Integration</FeatureText>
              </Feature>
              <Feature>
                <FeatureImage>
                  <img src={clock} />
                </FeatureImage>
                <FeatureText>24/7 Availability</FeatureText>
              </Feature>
              <Feature>
                <FeatureImage>
                  <img src={penruler} />
                </FeatureImage>
                <FeatureText>Fully Customised</FeatureText>
              </Feature>
              <Feature>
                <FeatureImage>
                  <img src={userheadset} />
                </FeatureImage>
                <FeatureText>Ongoing support and maintenance</FeatureText>
              </Feature>
            </FeatureList>
          </ChatBotSection>
        </MobileContainer>
      </Container>
      <DesktopContainer>
        <Ditem>
          <h2>Custom Chat Bots</h2>
          <Chat />
        </Ditem>
        <Ditem>
          <p style={{ color: '#444', width: '90%', margin: '0 auto' }}>
            Utilize the power of interactive conversation to captivate your
            audience. With its intelligent and natural language processing
            capabilities, it engages visitors in meaningful and personalized
            interactions, keeping them hooked and eager to explore more.
          </p>
          <FeatureList>
            <Feature>
              <FeatureImage>
                <img src={braincircuit} />
              </FeatureImage>
              <FeatureText>Intelligent and Conversational</FeatureText>
            </Feature>
            <Feature>
              <FeatureImage>
                <img src={userheadset} />
              </FeatureImage>
              <FeatureText>Ongoing support and maintenance</FeatureText>
            </Feature>
            <Feature>
              <FeatureImage>
                <img src={database} />
              </FeatureImage>
              <FeatureText>Data Driven Insights</FeatureText>
            </Feature>
            <Feature>
              <FeatureImage>
                <img src={bolt} />
              </FeatureImage>
              <FeatureText>Seamless Integration</FeatureText>
            </Feature>

            <Feature>
              <FeatureImage>
                <img src={penruler} />
              </FeatureImage>
              <FeatureText>Fully Customised</FeatureText>
            </Feature>
            <Feature>
              <FeatureImage>
                <img src={clock} />
              </FeatureImage>
              <FeatureText>24/7 Availability</FeatureText>
            </Feature>
          </FeatureList>
        </Ditem>
      </DesktopContainer>
    </>
  )
}

export default BlogFeatures
