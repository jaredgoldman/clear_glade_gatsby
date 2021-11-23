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
        credentials: require('./credentials.json'),
        filterNode: () => true,
        mapNode: (node) => node,
      },
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: ['6tchlknm4e05jr98426c18hvvc@group.calendar.google.com'],
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      },
    },
  ],
  proxy: {
    prefix: '/*',
    url: 'https://peaceful-stream-17384.herokuapp.com',
  },
}
