import React from 'react'
import Layout from '../components/Layouts/Layout'
import Inventory from '../components/Inventory/Inventory'
import { graphql } from 'gatsby'

export default function inventory({ data }) {
  return (
    <Layout>
      <Inventory products={data.allStrapiProducts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProducts {
      nodes {
        description
        quantity
        name
        price
        image {
          url
        }
      }
    }
  }
`
