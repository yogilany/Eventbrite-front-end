import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Headerpub from "../../Publishpage/Headerpub";
import OnlyLinksSideBar from "../Sidebar/OnlyLinksSidebar";
import MainOrangeButton from 'src/Components/Buttons/MainOrangeButton';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUserToken } from "src/features/authSlice";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import TableRow  from './Components/TableRow';
import { set } from 'date-fns';

const ManageEvents = () => {
    const token = useSelector(selectUserToken);
    const Navigate = useNavigate();
    const [ loading, setLoading] = useState(true)

    const [filter, setFilter] = useState("all");
    const [ events, setEvents] = useState(null)
    const [ filteredEvents, setFilteredEvents] = useState(null)

    const fetchMyevents = () => {

        setLoading(true)
            axios
              .get(`${process.env.REACT_APP_BASE_API}/users/me/created/events`, {
                headers: {
                  ContentType: "application/json",
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(function (response) {
                console.log("my events", response.data);
                setEvents(response.data);
                setFilteredEvents(response.data);
                setLoading(false);
                
                // setCategories(response.data);
                // setIsLoading(false);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
    }

    useEffect(() => {
        fetchMyevents()
    }, [])

    useEffect(() => {
        setLoading(true)
        if(filter === "all"){
            setFilteredEvents(events);
        }else if(filter === "upcoming"){
            const upcoming = events.filter((event) => {
                return new Date(event.date_and_time.start_date_time) > new Date()
            })
            setFilteredEvents(upcoming)
        }else if(filter === "past"){
            const past = events.filter((event) => {
                return new Date(event.date_and_time.start_date_time) < new Date()
            })
            setFilteredEvents(past)
        }
        setLoading(false)

    }, [filter])




  return (
    <>
    <Headerpub data_testid="HDID" />
    <OnlyLinksSideBar />

    <Container fluid className="mt-5 pl-24">
      <Row>
        <Col md={12} className="px-24 ">
          <h1
            className="mt-5 mb-4 font-black text-6xl"
            style={{ color: "#1e0a3c"}}
          >
            Events
          </h1>
          <div className="flex flex-row justify-between">
  
<select onChange={(e) => setFilter(e.target.value)} id="countries" class="mb-4 w-48 bg-blue-700 border border-gray-300 text-white text-xs font-semibold rounded-3xl focus:ring-blue-500 focus:border-blue-500 block  p-3 ">
  <option value="all" selected>All Events</option>
  <option value="upcoming">Upcoming</option>
  <option value="past">Past</option>
</select>
<MainOrangeButton  onClick={() => Navigate("./create-event")} text="Create Event" />
            </div>
       
        

<div class="relative overflow-x-auto">

{loading || !filteredEvents ?  <div class="flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50 ">
    <div role="status">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
</div> : events.length == 0 ? <div className='bg-gray-200 p-12 rounded'><h1 className='text-xl '>You have not created any events yet</h1></div> : <table class="mt-8 w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Event
                </th>
                <th scope="col" class="px-6 py-3">
                    Sold
                </th>
                <th scope="col" class="px-6 py-3">
                    Gross
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            {
                filteredEvents.map((event) => {
                    return <TableRow event={event} />
                })
            }
          
     
        </tbody>
    </table> }

</div>


     
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default ManageEvents