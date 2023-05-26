import { set } from 'date-fns';
import React from 'react'
import { useState } from 'react'


/**
 * @author Anas Sherif
 * @param {}
 * @description This is the row component that shows the ticket data in the table.
 * @returns {JSX.Element}
 */

const RowInput = ({ticket, tickets, setTickets}) => {
    const [quantity, setQuantity] = useState(0);
    const [facevalue, setFaceValue] = useState(0);

    const ticketHandler = (e) => {
        setQuantity(e.target.value);
        setFaceValue(e.target.value * ticket.price);
        const newTicket ={
            ticket: ticket,
            quantity: e.target.value,
            facevalue: e.target.value * ticket.price,
        }
        // console.log(newTicket);

        // check if the ticket type of the new ticket is not in tickets array, then add it.
        // else, update the quantity and facevalue of the ticket type in the tickets array
        // console.log("tickets2",tickets)
        const index = tickets.findIndex((ticket) => ticket.ticket.type === newTicket.ticket.type);
        if(index === -1){
             // if the quantity of the ticket type is 0, then remove it from the tickets array


            setTickets([...tickets, newTicket]);

        }else{
            const newTickets = [...tickets];

            if(newTicket.quantity == 0){
                const newTickets = tickets.filter((ticket) => ticket.ticket.type !== newTicket.ticket.type);
                setTickets(newTickets);
            }
            else{
            newTickets[index] = newTicket;
            setTickets(newTickets);}

        }

                

      
        



        
      
    } 
    
    return (<>
    <td align="center">
    <input
      type="text"
      maxLength={3}
      className="add-attendee-currency-input"
      name="quantity"
      id="quantity"
      value={quantity}
      defaultValue={0}
      data-automation="ticket-quantity-1039617099"
      onChange={ticketHandler}
    />
  </td>
  <td align="center">
    <input
      type="text"
      maxLength={3}
      className="add-attendee-currency-input"
      name="facevalue"
      id="facevalue"
      value={facevalue}
      defaultValue={0}
      data-automation="ticket-quantity-1039617099"
    />
  </td>
  </>
  )
}

export default RowInput