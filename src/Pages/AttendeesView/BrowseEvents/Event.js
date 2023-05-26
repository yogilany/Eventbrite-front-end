import React from "react";
import { Link } from "react-router-dom";


/**
 * @author Yousef Gilany
 * @description This is the event card component that is used in the browse events page
 * @returns {React.FC}
 */

const Event = ({ Title, Date, Organizer, Id, Image, Location, Price }) => {
  return Title && Date && Organizer && Image ? (
    <Link to={`/event/${Id}`}>
      <div className="grid grid-cols-3 p-4 bg-white hover:drop-shadow-xl  rounded w-full h-auto mb-2 transition">
        <div className="col-span-2 ">
          <h1
            style={{
              fontWeight: "600",
              color: "#39364f",
              fontSize: "1.125rem",
              marginBottom: ".5rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "280px",
            }}
          >
            {Title}
          </h1>
          <h2
            style={{
              fontWeight: "600",
              color: "#d1410c",
              fontSize: ".875rem",
              lineHeight: "1.25rem",
            }}
          >
            {Date}
          </h2>
          <h2
            style={{
              fontWeight: "400",
              color: "#6f7287",
              fontSize: ".875rem",
              lineHeight: "1.25rem",
            }}
          >
            {Location}
          </h2>
          <h2
            style={{
              fontWeight: "400",
              color: "#6f7287",
              fontSize: ".875rem",
              lineHeight: "1.25rem",
            }}
          >
            {Price == 0 ? "" : "$"}
            {Price == 0 ? "Free" : Price}
          </h2>

          <h2
            style={{
              marginTop: "1rem",
              fontWeight: "600",
              color: "#6f7287",
              fontSize: ".875rem",
              lineHeight: "1.25rem",
            }}
          >
            {Organizer}
          </h2>
          <div className="flex flex-row ">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <h2
              style={{
                fontWeight: "600",
                color: "#6f7287",
                fontSize: ".8rem",
                lineHeight: "1.25rem",
              }}
            >
              {" "}
              100 Followers
            </h2>
          </div>
        </div>
        <div className="col-span-1 text-right self-end ml-auto">
          <img className=" object-cover w-48 h-24" src={Image} alt="event" />
          <div className="flex flex-row justify-end mt-2">
            <button
              type="button"
              class="transition text-gray-600 bg-gray-0 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  "
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
            <button
              type="button"
              class=" transition text-gray-600 bg-gray-0 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  "
            >
              <svg
                              class="w-4 h-4"

                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <Link to={`/event/${Id}`}  >
    <div className="grid grid-cols-3 p-4 bg-white hover:drop-shadow-2xl w-max h-auto mb-2">
      <div className="col-span-2">
        <h1
          style={{
            fontWeight: "600",
            color: "#39364f",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            marginBottom: ".5rem",
          }}
        >
          Title
        </h1>
        <h2
          style={{
            fontWeight: "600",
            color: "#d1410c",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}
        >
          Date
        </h2>
        <h2
          style={{
            fontWeight: "600",
            color: "#d1410c",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}
        >
          Location
        </h2>

        <h2
          style={{
            fontWeight: "400",
            color: "#6f7287",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}
        >
          Organizer
        </h2>
      </div>
      <div className="col-span-1">
        {/* <img className=" object-cover w-48 h-24" src={Image} alt="event" /> */}
      </div>
    </div>
    </Link>

  );
};

export default Event;
