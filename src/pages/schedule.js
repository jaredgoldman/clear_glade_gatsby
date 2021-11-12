import React from 'react'
import Layout from '../components/Layouts/Layout'
import Schedule from '../components/BookingSchedule'
import { BookingProvider } from '../contexts/BookingContext'

export default function schedule() {
  return (
    <Layout>
      <BookingProvider>
        <Schedule/>
      </BookingProvider>
    </Layout>
  )
}
