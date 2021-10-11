import React from 'react'
import Layout from '../components/Layout'
import Inventory from '../components/Inventory/Inventory'
import { graphql } from 'gatsby'

export default function inventory(props) {

  return (
    <Layout>
      <Inventory {...props}/>
    </Layout>
  )
}

export const spreadsheetQuery = graphql`
  query {
    allSheet1 {
      edges {
        node {
          item
          price
          quantity
          description
          image
        }
      }
    }
  }
`