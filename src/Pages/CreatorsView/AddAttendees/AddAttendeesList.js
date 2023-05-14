import React from 'react'
import AttendeeData from './AttendeeData'

const AddAttendeesList = ({ticketType,order_id, event, setIsSuccess}) => {
    console.log("order_id ",order_id)
    // console.log("ticketType",ticketType)
    const quantity = parseInt(ticketType.quantity);
    // create a new array with the quantity of tickets
    const tickets = Array(quantity).fill(ticketType);
    // console.log("tickets count",tickets)
    const handleAddAttendee = (props) => {
        // setAttendees([...attendees, props]);
      }
    
  return (
    <div>
{    tickets.map((ticket, index) =>      <AttendeeData
setIsSuccess={setIsSuccess}
                                        key={index}
                                        ticket={ticket}
                                        handleAddAttendee={handleAddAttendee}
                                        // handleAddTicket={handleAddTicket}
                                        index={index + 1}
                                        total={tickets.length}
                                        orderID={order_id}
                                        event={event}
                                        // isFinalCheckout={isFinalCheckout}
                                        // isPlaceorder={isPlaceorder}

                                      /> )
}    </div>
  )
}

export default AddAttendeesList