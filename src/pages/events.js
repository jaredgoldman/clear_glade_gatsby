import React from 'react'
import { graphql } from 'gatsby'
import Events from '../components/Events'
import Layout from '../components/Layouts/Layout'

export default function events({ data }) {
  return (
    <Layout>
      <Events events={data.allStrapiEvents} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiEvents {
      nodes {
        name
        start
        end
        created_at
        description
        image {
          url
        }
      }
    }
  }
`
