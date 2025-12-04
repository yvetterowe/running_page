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
    'gatsby-plugin-remove-serviceworker',
  ],
};
