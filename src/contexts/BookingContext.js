// import React, { useContext, useEffect, useState } from 'react'
// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../firebase";
// import { addWeeks, startOfWeek, endOfWeek, nextThursday } from 'date-fns';

// const BookingContext = React.createContext();

// export function useBooking() {
//   return useContext(BookingContext);
// }

// export function BookingProvider({ children }) {
//   const [rooms, setRooms] = useState();
//   const [weeks, setWeeks] = useState();

//   useEffect(() => {
//     if (!rooms) {
//       getRooms().then(roomData => {
//         setRooms(roomData)
//       })
//     }
//     setWeeks(getWeeks(Date.now()))
//   }, [])
 
//   const getRooms = async () => {
//     const rooms = await getDocs(collection(db, 'rooms'));
//     const roomArr = [];
//     rooms.forEach(room => {
//       roomArr.push(room.data())
//     })
//     return roomArr.sort((a, b) => a.name - b.name);
//   }

//   const getWeeks = (currDate) => {
//     const firstWeek = formatWeek(currDate);
//     const weeks = [firstWeek];

//     for (let i = 0; i <= 7; i++) {
//       currDate = addWeeks(currDate, 1);
//       const formattedWeek = formatWeek(currDate)
//       weeks.push(formattedWeek);
//     }
//    return weeks;
//   }

//   const bookRoom = (room, date) => {

//   }

//   // HELPERS

//   const formatWeek = (currDate) => {
//     console.log(currDate);
//     const start = startOfWeek(currDate, { weekStartsOn: 1 });
//     const end = endOfWeek(currDate, { weekStartsOn: 1 });
//     const thursday = nextThursday(start)

//     return {
//       end,
//       thursday
//     }
//   }

//   const value = {
//     rooms,
//     weeks
//   }

//   return (
//     <BookingContext.Provider value={value}>
//       {children}
//     </BookingContext.Provider>
//   )
// }