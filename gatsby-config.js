module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    siteTitle: 'Hao\'s Running Journey',
    siteUrl: 'https://run.haoluo.io',
    logo: 'https://avatars.githubusercontent.com/u/5595281?v=4',
    description: 'Hao\'s running journey',
    navLinks: [
      {
        name: 'About',
        url: 'https://haoluo.io',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: "gatsby-plugin-vercel",
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.JPG', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          // Force service worker to update immediately
          skipWaiting: true,
          clientsClaim: true,
          // Check for updates more frequently (every 2 hours)
          runtimeCaching: [
            {
              urlPattern: /^https?:.*\/icons\/.*\.png/,
              handler: `CacheFirst`,
            },
            {
              urlPattern:
                /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:\/\/api\.mapbox\.com\//,
              handler: `StaleWhileRevalidate`,
            },
            {
              // Critical: Force network-first for page data to get latest content
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `NetworkFirst`,
              options: {
                networkTimeoutSeconds: 3,
              },
            },
            {
              // Force network-first for app data to get latest activities
              urlPattern: /^https?:.*\/static\/activities\.json/,
              handler: `NetworkFirst`,
              options: {
                networkTimeoutSeconds: 3,
              },
            },
          ],
        },
      },
    },
  ],
};
