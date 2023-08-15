import React, { useState } from 'react';

const FullScreenImageModal = ({ seat, onClose }:any) => {
  const rowsWithSeats = [
    { row: 1, seats: 4, activeSeats: [1] },
    { row: 2, seats: 4, activeSeats: [2, 3] },
    { row: 3, seats: 6, activeSeats: [] },
  ];
  const [bookingMessage,setBookingMessage] = useState('')

  const isSeatActive = (row:any, seatIndex:any) => {
    const activeRow = rowsWithSeats.find((rowInfo) => rowInfo.row === row);
    return activeRow && activeRow.activeSeats.includes(seatIndex + 1);
  };

  const handleSeatClick = (row:any, seatIndex:any) => {
    // Implement your booking or availability logic here
    console.log(`Seat ${row}-${seatIndex + 1} clicked`);
  };

  const applyForBooking = (event:any) => {
    console.log(event)
    !event ? setBookingMessage('This seat already booked'): setBookingMessage('Booking has been confirmed!')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Select a Seat</h2>
        <table className="table-fixed mx-auto w-full">
          <tbody>
            {rowsWithSeats.map((rowInfo) => (
              <tr key={`row-${rowInfo.row}`}>
               <td className="text-center font-semibold py-4">
                  Row {rowInfo.row}
                </td>
                {Array.from({ length: rowInfo.seats }, (_, seatIndex) => (
                  <td
                    key={`seat-${rowInfo.row}-${seatIndex}`}
                    onClick={() => handleSeatClick(rowInfo.row, seatIndex)}
                  >
                    <svg
                      viewBox="0 0 49 44"
                      fill={isSeatActive(rowInfo.row, seatIndex) ? '#777' : '#e26d5a'}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 mx-auto hover:w-12 cursor-pointer"
                      onClick={()=>applyForBooking(isSeatActive(rowInfo.row, seatIndex))}
                    >
                     <g data-v-974ce7e5=""><path d="M46.7462 14.0677H43.8277C43.0251 14.0677 42.3684 14.7072 42.3684 15.4887V26.2171V31.0485C42.3684 31.83 43.0251 32.4694 43.8277 32.4694H46.7462C47.5488 32.4694 48.2054 31.83 48.2054 31.0485V15.4887C48.2054 14.7072 47.5488 14.0677 46.7462 14.0677Z" fill={isSeatActive(rowInfo.row, seatIndex) ? '#777' : '#e26d5a'} data-v-974ce7e5=""></path><path d="M2.23904 14.0677C1.43645 14.0677 0.779785 14.7072 0.779785 15.4887V31.0485C0.779785 31.83 1.43645 32.4694 2.23904 32.4694H5.15755C5.96014 32.4694 6.61681 31.83 6.61681 31.0485V26.2171V15.4887C6.61681 14.7072 5.96014 14.0677 5.15755 14.0677H2.23904Z" fill={isSeatActive(rowInfo.row, seatIndex) ? '#777' : '#e26d5a'} data-v-974ce7e5=""></path><path d="M39.5231 6.18129C39.5231 3.05514 36.8964 0.497375 33.686 0.497375H15.2994C12.0891 0.497375 9.4624 3.05514 9.4624 6.18129V31.1905C9.4624 31.9721 10.1191 32.6115 10.9217 32.6115H37.9908C38.7934 32.6115 39.4501 31.9721 39.4501 31.1905V6.18129H39.5231Z" fill={isSeatActive(rowInfo.row, seatIndex) ? '#777' : '#e26d5a'} data-v-974ce7e5=""></path><path d="M46.7463 35.3824H40.9093H8.00306H2.16604C1.36345 35.3824 0.706787 36.0219 0.706787 36.8034V41.4216C0.706787 42.2031 1.36345 42.8426 2.16604 42.8426H46.7463C47.5489 42.8426 48.2055 42.2031 48.2055 41.4216V36.8034C48.2055 36.0219 47.5489 35.3824 46.7463 35.3824Z" fill={isSeatActive(rowInfo.row, seatIndex) ? '#777' : '#e26d5a'} data-v-974ce7e5=""></path></g>
                    </svg>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-center">
          <p className="mb-4 text-center py-2 color-green-300">{bookingMessage}</p>
        <button
            className="bg-[#881A38] text-white py-3 px-[60px] rounded-[20px]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenImageModal;
