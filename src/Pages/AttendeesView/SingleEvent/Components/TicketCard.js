import React from 'react'
import { useState } from 'react'


const TicketCard = ({ticket, handleAddTicket}) => {
    const [quantity, setQuantity] = useState(0);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg ">
    <div className="   p-6 space-x-6 border-b border-gray-300 ">
        <div className="grid grid-cols-2 justify-between ">
            <div>
            <h3 className="text-md font-semibold text-gray-800 p-0">{ticket.name}</h3>

            </div>
            <div className="flex flex-col items-end">
                <div>
                <button
                disabled = {quantity === 0 ? true : false }
                onClick={() => {setQuantity(quantity - 1);
                    handleAddTicket(ticket, quantity - 1)}}
                type="button"
                className=" disabled:bg-blue-200 disabled:hover:bg-blue-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </button>{" "}
             
                <span className=" mx-3 font-semibold text-gray-900">
                  {quantity}
                </span>{" "}
             
              <button
                              disabled = {quantity === ticket.available_quantity ? true : false}
                              onClick={() => {setQuantity(quantity + 1);
                              handleAddTicket(ticket, quantity + 1)}}

                type="button"
                className=" disabled:bg-blue-200 disabled:hover:bg-blue-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
                </div>
          
            </div>

        </div>
    </div>
    <div id="defaultTabContent">
        <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
<h1 className="text-md font-semibold text-gray-800 ">${ticket.price}</h1>    
<p className="text-sm text-gray-700 dark:text-gray-600">      
Sales ends at {new Date(ticket.sales_end_date_time).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
})}</p>
        </div>
      
    </div>
</div>
  )
}

export default TicketCard