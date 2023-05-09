import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Follow from "../../FollowingOrganizersEvents/Components/Follow";
import EventHorizontal from "./EventHorizontal";


/**
 * @author Yousef Gilany
 * @description This is the Search modal to search for events.
 * @returns {React.FC}
 * @todo create the search input component.
 * @todo create the search results component.
 * @todo create the search filters component.
 * @todo create the advertised collection component.
 *
 */
const SearchPage = ({ toggle, location }) => {
  const navigate = useNavigate();
  const [serach, setSearch] = React.useState("");
  const [newlocation, setNewLocation] = React.useState(location);

  return (
    <Container fluid className="search-page p-5">
      <button onClick={() => toggle(false)} type="button" className="absolute right-12 text-white bg-gray-400 hover:bg-gray-500 focus:ring-0 focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 ">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
</svg></button>
      <Row className="p-5">
        <Col className="p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>

            <div className="flex flex-row mb-4">
            <svg className="w-12 h-12 text-gray-600 mr-4"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path clipRule="evenodd" fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
</svg>
            <input
                      value={serach}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      type="search"
                      id="default-search"
                      className="  p-2 w-min text-3xl font-bold text-blue-700 border-b-4 border-b-gray-300  focus:border-b-blue-600 focus:ring-0 focus:outline-none "
                      placeholder="Serach for anything"
                    />
                 
                    <svg  className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path clipRule="evenodd" fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
</svg>
            </div>
            <div className="flex flex-row ">
            <svg   className="w-12 h-12 text-gray-600 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path clipRule="evenodd" fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
</svg>
            <input
            defaultValue={location}
                      value={newlocation}
                      onChange={(e) => {
                        setNewLocation(e.target.value);
                      }}
                      type="search"
                      id="default-search"
                      className="  p-2 w-56 text-3xl font-bold text-blue-700 border-b-4 border-b-gray-300  focus:border-b-blue-600 focus:ring-0 focus:outline-none "
                      placeholder="location"

                    />
                 
                    
            </div>
            </div>
            <div className="">
              <h1 className=" text-6xl font-extrabold text-blue-950 mb-12">Top Matches</h1>
              <EventHorizontal
          Title="Work in Europe / Sweden - Work Visa, Employers, Jobs, Relocation (DC)"
          Date="Today at 4:00 PM + 24 more events"
          Location="Regus - Washington DC - Metro Center, Washington"
          Price="Starts at €19.00"
        ></EventHorizontal>  
         <EventHorizontal
          Title="Work in Europe / Sweden - Work Visa, Employers, Jobs, Relocation (DC)"
          Date="Today at 4:00 PM + 24 more events"
          Location="Regus - Washington DC - Metro Center, Washington"
          Price="Starts at €19.00"
        ></EventHorizontal>             
              </div>

          </div>

       
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
