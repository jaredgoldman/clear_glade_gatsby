require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        spreadsheetId: process.env.GATSBY_G_SPREADSHEET_ID,
        spreadsheetName: '',
        typePrefix: '',
        credentials: JSON.parse(process.env.GATSBY_GOOGLE_CAL_CREDENTIALS),
        filterNode: () => true,
        mapNode: (node) => node,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    // {
    //   resolve: `gatsby-source-google-calendar`,
    //   options: {
    //     calendarIds: ['6tchlknm4e05jr98426c18hvvc@group.calendar.google.com'],
    //     timeMin: new Date().toISOString(),
    //     maxResults: 10,
    //     singleEvents: true,
    //     orderBy: 'startTime',
    //   },
    // },
  ],
  proxy: {
    prefix: '/*',
    url: 'https://peaceful-stream-17384.herokuapp.com',
  },
}
