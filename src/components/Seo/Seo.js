import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, pathname, article, date, thumbnail }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          defaultDate,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
        date: date || defaultDate,
        thumbnail: `${siteUrl}${thumbnail}`,
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="google-site-verification" content="opp2HWyDP3HJBpq5OIkU7hy7-gX3gwrBeilxFoQO0Ng" />
            <meta name="image" content={seo.image} />
            <meta name="thumbnail" content={seo.thumbnail}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Caricode" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
             {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.image &&  <meta property="og:image:type" content="image/jpg" />}
            {seo.image && <meta property="og:image:width" content="1200" />}
            {seo.image && <meta property="og:image:height" content="630" />}

            {seo.image && <meta property="og:image" content={seo.thumbnail} />}
            {seo.image && <meta property="og:image:type" content="image/png" />}
            {seo.image && <meta property="og:image:width" content="300" />}
            {seo.image && <meta property="og:image:height" content="300" />}F
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            {seo.date && <meta name="date" content={seo.date} />}
            <html lang="en" />
          </Helmet>
        </>
      )
    }}
  />
)
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        defaultDate: date
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  date: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
  date: '2020-01-28',
}
