import React, { useContext, useEffect, useState } from 'react'
import { addWeeks, startOfWeek, endOfWeek, nextThursday } from 'date-fns';
import axios from 'axios';

const BookingContext = React.createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [rooms, setRooms] = useState();
  const [weeks, setWeeks] = useState();

  useEffect(() => {
    getRooms().then(data => setRooms(data))
    setWeeks(getWeeks(Date.now()))
  }, [])
 
  const getRooms = async () => {
    const res = await axios.get('http://localhost:1337/rooms');
    return res.data
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

    console.log(bookingData);
    try {
      const res = await axios.post('http://localhost:1337/bookings', bookingData)
      console.log(res.data);
    } catch(error) {
      console.log(error);
    }
  }

  // HELPERS
  const formatWeek = (currDate) => {
    const start = startOfWeek(currDate, { weekStartsOn: 1 });
    const end = endOfWeek(currDate, { weekStartsOn: 1 });
    const thursday = nextThursday(start)

    return {
      start,
      end,
      thursday
    }
  }

  const value = {
    rooms,
    weeks,
    bookRoom
  }

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  )
}