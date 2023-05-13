import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectUserToken } from "src/features/authSlice";
import { Link } from 'react-router-dom';


const TableRow = ({event}) => {
    const token = useSelector(selectUserToken);
    const [totalTickets, setTotalTickets] = useState(0);
    const [SoldTickets, setSoldTickets] = useState(0);
    const [gross, setGross] = useState(0);


    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short'
      };
        const formatter = new Intl.DateTimeFormat('en-US', options);

        const fetchTickets = () => {
            axios
              .get(`${process.env.REACT_APP_BASE_API}/tickets/event_id/${event.id}`, {
                headers: {
                  ContentType: "application/json",
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(function (response) {
                console.log("my tickets", response.data);
                // loop on the max quantity attribute of each ticket in the array and add it to the totalTickets
                response.data.map((ticket) => {
                    setTotalTickets(totalTickets + ticket.max_quantity);
                    setSoldTickets(SoldTickets + (ticket.max_quantity - ticket.available_quantity));
                    setGross(gross + ((ticket.max_quantity - ticket.available_quantity) * ticket.price));

                })

                



                // setEvents(response.data);
                // setCategories(response.data);
                // setIsLoading(false);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
    }

    useEffect(() => {
        fetchTickets()
    }, [])
    
  return (
    <tr class="bg-white border-b ">
            <Link to={`/event/${event.id}`}>

                    <td class="px-6 py-4">
                        <div className='flex flex-row'>
                        <div class="flex flex-col align-middle justify-center p-2 mr-2 text-center">
                                <p className='text-red-500'>{new Date(event.date_and_time.start_date_time).toLocaleString('default', { month: 'short' })}</p>
                                <p className='text-gray-600 font-semibold text-lg'>{new Date(event.date_and_time.start_date_time).getDate()}</p>

                            </div>
                            <img src={event.image_link == "https://www.example.com/image.png" ?"https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" : event.image_link} alt="" className='w-14 h-14 mr-4 rounded-lg object-cover' />
                        <div class="flex flex-col align-middle justify-center">
                                <h1 class="font-semibold">{event.basic_info.title}</h1>
                                <h3 className='text-xs text-gray-500'>{formatter.format(new Date(event.date_and_time.start_date_time)) }</h3>
                                </div>

                        </div>
                            
                        </td>
                        </Link>

                        <td class="px-6 py-4 text-left">
                            {SoldTickets}/{totalTickets}    
                        </td>
                        <td class="px-6 py-4 text-left">
                            ${gross}
                        </td>
                        <td class="px-6 py-4 text-left">
                        {new Date(event.date_and_time.start_date_time).getTime() > new Date().getTime() ? null : <span class="text-green-500 text-xl">•</span>}

                            {new Date(event.date_and_time.start_date_time).getTime() > new Date().getTime() ? 'Upcoming' : 'On Sale'}
                        </td>

                    </tr>
  )
}

export default TableRow