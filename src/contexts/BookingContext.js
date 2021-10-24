import React, { useContext, useEffect, useState } from 'react'
import { addWeeks, startOfWeek, endOfWeek, nextThursday } from 'date-fns';
import axios from 'axios';
import UseEmail from '../hooks/UseEmail';

const BookingContext = React.createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [rooms, setRooms] = useState();
  const [weeks, setWeeks] = useState();
  const [bookings, setBookings] = useState();
  const [processingBooking, setProcessingBooking] = useState(false)

  const { sendConfirmationEmail } = UseEmail()

  useEffect(() => {
    getRooms().then(data => setRooms(data))
    setWeeks(getWeeks(Date.now()))
  }, [])

  useEffect(() => {
    getBookings().then(data => {
      setBookings(data)
    })
  }, [processingBooking])
 
  const getRooms = async () => {
    try {
      const res = await axios.get('/rooms/');
      return res.data
    } catch(error) {
      console.log(error)
    }
  }

  const getWeeks = (currDate) => {
    const firstWeek = formatWeek(currDate);
    const weeks = [firstWeek];

    for (let i = 1; i <= 7; i++) {
      currDate = addWeeks(currDate, 1);
      const formattedWeek = formatWeek(currDate)
      weeks.push(formattedWeek);
    }
   return weeks;
  }

  const bookRoom = async (bookingData) => {
    try {
      const res = await axios.post('/bookings/', bookingData)
      sendConfirmationEmail(res.data)
      return res.data
    } catch(error) {
      console.log(error);
    }
  }

  const getBookings = async () => {
    //TODO: only retreive bookings from the present day forward
    try {
      const res = await axios.get('/bookings/');
      return res.data;
    } catch(error) {
      console.log(error);
    }
  }

  // HELPERS
  const formatWeek = (currDate) => {
    const start = startOfWeek(currDate, { weekStartsOn: 1 });
    const end = endOfWeek(currDate, { weekStartsOn: 1 });
    const thursday = nextThursday(start);

    return {
      start,
      end,
      thursday
    }
  }

  const value = {
    rooms,
    weeks,
    bookings,
    bookRoom,
    getBookings,
    processingBooking,
    setProcessingBooking
  }

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  )
}