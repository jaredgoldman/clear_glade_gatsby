import React from 'react'
import axios from 'axios'

export default function UseEmail() {

  const sendConfirmationEmail = async (emailData) => {
    try {
      const res = await axios.post('/bookings/confirm', emailData)
      console.log(res.data);
    } catch(e) {
      console.log(e.response);
    }
  }

  return {
    sendConfirmationEmail
  }
}
