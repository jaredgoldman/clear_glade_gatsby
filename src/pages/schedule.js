import React from 'react'
import Layout from '../components/Layout'
import Schedule from '../components/BookingSchedule/Schedule'
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
