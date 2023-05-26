import React from "react";
import axios, { all } from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "src/features/authSlice";
import { Link } from "react-router-dom";
import { set } from "date-fns";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import MainGrayButton from "src/Components/Buttons/MainGrayButton";
import MainOrangeButton from "src/Components/Buttons/MainOrangeButton";

const TableRow = ({ event, csvExport, fetch }) => {
  const token = useSelector(selectUserToken);
  const [totalTickets, setTotalTickets] = useState(0);
  const [SoldTickets, setSoldTickets] = useState(0);
  const [gross, setGross] = useState(0);
  const [show, setShow] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);

  const fetchTickets = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API}/tickets/event_id/${event.id}`, {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // console.log("my tickets", response.data);
        // loop on the max quantity attribute of each ticket in the array and add it to the totalTickets
        response.data.map((ticket) => {
          setTotalTickets(totalTickets + ticket.max_quantity);
          setSoldTickets(
            SoldTickets + (ticket.max_quantity - ticket.available_quantity)
          );
          setGross(
            gross +
              (ticket.max_quantity - ticket.available_quantity) * ticket.price
          );
        });

        // const newReportRow = {
        //     event: event.basic_info.title,
        //     date: formatter.format(new Date(event.date_and_time.start_date_time)) ,
        //     status: new Date(event.date_and_time.start_date_time).getTime() > new Date().getTime() ? 'Upcoming' : 'On Sale',
        //     SoldTickets: SoldTickets,
        //     AvailableTickets: totalTickets - SoldTickets,
        // }

        // // add newReportRow to allData if the event property in the object is not already in the array
        // const index = allData.findIndex((row) => row.event === newReportRow.event);
        // if(index === -1){
        //     // console.log("allDataallData", allData)
        //     setAllData([...allData, newReportRow]);

        // }

        // setEvents(response.data);
        // setCategories(response.data);
        // setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  };

    const handleDelete = (id) => {
        setShow(true)
        // console.log("id", id)
        
      
      }
    

    const handleConfirmDelete = (id) => { 
        axios
        .delete(`${process.env.REACT_APP_BASE_API}/events/id/${id}`, {
          headers: {
            ContentType: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
        //   console.log("response", response);
            fetch();
          setShow(false)

          // setEvents(response.data);
          // setCategories(response.data);
          // setIsLoading(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    const handleClose = () => setShow(false);

    

  useEffect(() => {
    fetchTickets();
  }, []);



  return (
    <tr class="bg-white border-b ">
      <Link to={`/manage-event/${event.id}`}>
        <td class="px-6 py-4">
          <div className="flex flex-row">
            <div class="flex flex-col align-middle justify-center p-2 mr-2 text-center">
              <p className="text-red-500">
                {new Date(event.date_and_time.start_date_time).toLocaleString(
                  "default",
                  { month: "short" }
                )}
              </p>
              <p className="text-gray-600 font-semibold text-lg">
                {new Date(event.date_and_time.start_date_time).getDate()}
              </p>
            </div>
            <img
              src={
                event.image_link == "https://www.example.com/image.png"
                  ? "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                  : event.image_link
              }
              alt=""
              className="w-14 h-14 mr-4 rounded-lg object-cover"
            />
            <div class="flex flex-col align-middle justify-center">
              <h1 class="font-semibold">{event.basic_info.title}</h1>
              <h3 className="text-xs text-gray-500">
                {formatter.format(
                  new Date(event.date_and_time.start_date_time)
                )}
              </h3>
            </div>
          </div>
        </td>
      </Link>

      <td class="px-6 py-4 text-left">
        {SoldTickets}/{totalTickets}
      </td>
      <td class="px-6 py-4 text-left">${gross}</td>
      <td class="px-6 py-4 text-left">
        {new Date(event.date_and_time.start_date_time).getTime() >
        new Date().getTime() ? null : (
          <span class="text-green-500 text-xl">•</span>
        )}

        {new Date(event.date_and_time.start_date_time).getTime() >
        new Date().getTime()
          ? "Upcoming"
          : "On Sale"}
      </td>
      <td class="px-6 py-4 text-left">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
        >
          <button
          onClick={() => {handleDelete(event.id)}}
            type="button"
            class="text-gray-600 transition bg-gray-100 border border-gray-600 hover:bg-red-200 hover:text-red-400   hover:border-0 focus:ring-4 focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 "
          >
            <svg
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              ></path>
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </OverlayTrigger>
      </td>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to delete this event?  This cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <MainOrangeButton onClick={() => handleConfirmDelete(event.id)} text="Delete" />
          <MainGrayButton onClick={handleClose}text="Cancel" />
          {/* <Button variant="primary" onClick={() => handleConfirmDelete(event.id)}>Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default TableRow;
