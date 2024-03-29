module.exports = {
  siteMetadata: {
    siteUrl: `https://www.caricode.co`,
    description:
      'Looking for professional web development services in Mumbai? Our agency specializes in designing and building custom websites that are optimized for speed, functionality, and user experience. From responsive design to e-commerce solutions, we can help you establish a strong online presence and grow your business. Contact us today for a free consultation!',
    url: 'https://www.caricode.co', // No trailing slash allowed!
    image: '/images/image3.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@AnshulManaktala',
    date: '2023-01-28',
    title: 'Caricode',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-4SQ8PKXJEM', // Google Analytics / GA
          'AW-11098321264', // Google Ads / Adwords / AW
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
          // Defaults to https://www.googletagmanager.com
        },
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
              family: 'Source Sans Pro',
              variants: ['400', '700', '800'],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
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
