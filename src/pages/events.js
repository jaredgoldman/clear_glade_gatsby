import React from 'react'
import { graphql } from 'gatsby'
import Events from '../components/Events'
import Layout from '../components/Layouts/Layout'

export default function events(...props) {

  const events = props[0].data.allCalendarEvent.nodes

  return (
    <Layout>
      <Events events={events}/>
    </Layout>
  )
}

export const query = graphql`{
  allCalendarEvent {
    nodes {
      description
      summary
      start {
        dateTime
      }
      end {
        dateTime
      }
      attachments {
        fileUrl
        fileId
        iconLink
        title
      }
      id
  	}
  }
}
`
