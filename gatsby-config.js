module.exports = {
  siteMetadata: {
    siteUrl: `https://www.caricode.co`,
    description:
      'We design, build, deploy and manage web applications. Powered by Google Cloud.',
    url: 'https://www.caricode.co', // No trailing slash allowed!
    image: '/images/image3.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@caricode',
    date: '2020-01-28',
    title: 'Caricode',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-124272763-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/static': ['cache-control: public, max-age=31536000, immutable'],
          '/images': ['cache-control: public, max-age=31536000, immutable'],
          '/page-data': ['cache-control: public, max-age=0, must-revalidate'],
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Source Sans Pro",
              variants: ["400", "700", "800"],
              fontDisplay: 'swap',
              strategy: 'selfHosted'
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/posts/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caricode`,
        short_name: `Caricode`,
        start_url: `/`,
        background_color: `#7c759a`,
        theme_color: `#7c759a`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
