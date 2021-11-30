import React from 'react'
import Layout from '../components/Layouts/Layout'
import UserLanding from '../components/UserLanding/index'
import { graphql } from 'gatsby'

export default function user({ data }) {
  return (
    <Layout>
      <UserLanding data={data.allStrapiAnnouncements} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiAnnouncements {
      nodes {
        id
        content
        published_at
        title
        updated_at
        image {
          url
        }
      }
    }
  }
`
