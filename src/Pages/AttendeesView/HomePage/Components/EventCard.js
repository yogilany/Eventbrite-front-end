import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdPersonOutline } from "react-icons/md";
import card_bg from "../../../../assets/adel-10.png";
import adelEv1 from "../../../../assets/adelEv1.png";
import adelEv2 from "../../../../assets/adelEv2.png";
import adelEv3 from "../../../../assets/adelEv3.png";
import adelEv4 from "../../../../assets/adelEv4.png";
import adelEv5 from "../../../../assets/adelEv5.png";
import adelEv6 from "../../../../assets/adelEv6.png";
import adelEv7 from "../../../../assets/adelEv7.png";
import adelEv8 from "../../../../assets/adelEv8.png";
import adelEv9 from "../../../../assets/adelEv9.png";
import adelEv10 from "../../../../assets/adelEv10.png";
import adelEv11 from "../../../../assets/adelEv11.png";
import adelEv12 from "../../../../assets/adelEv12.png";
import adelEv13 from "../../../../assets/adelEv13.png";
import adelEv14 from "../../../../assets/adelEv14.png";

import { format } from "date-fns";
var parseISO = require("date-fns/parseISO");

/**
 * @author Yousef Gilany
 * @description The event card component.
 * It shows the event's image, title, date, location, price, and the organizer's name and followers.
 * It is used in the Events & MoreEvents component.
 * @returns {React.FC}
 *
 */

const EventCard = ({
  eventTitle,
  eventDate,
  eventTime,
  eventLocation,
  eventPrice,
  eventOrganizer,
  organizerFollowers,
  eventCover,
  eventID,
}) => {
  const eventsCover = [
    adelEv1,
    adelEv2,
    adelEv3,
    adelEv4,
    adelEv5,
    adelEv6,
    adelEv7,
    adelEv8,
    adelEv9,
    adelEv10,
    adelEv11,
    adelEv12,
    adelEv13,
    adelEv14,
  ];

  return (
    <Col xl={3} lg={4} md={4} sm={6} data-testid="event-card">
      <div className="card-container">
        <a href={`/event/${eventID}`}>
          <img
            className="h-40"
            data-testid="event-card-image"
            variant="top"
            width="100%"
            height="150px"
            alt="desc"
            style={{ objectFit: "cover" }}
            src={
              eventCover
                ? eventCover
                : eventsCover[Math.floor(Math.random() * eventsCover.length)]
            }
          />
        </a>
        <div className="p-3">
          <a href={`/event/${eventID}`}>
            <h1 className="card-title">{eventTitle}</h1>
          </a>
          <h3 className="card-date">
            {new Intl.DateTimeFormat("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).format(new Date(eventDate))}
          </h3>
          <h3 className="card-text overflow-hidden whitespace-nowrap overflow-ellipsis p-0 ">
            {eventLocation}
          </h3>
          <h3 className="card-text">
            {eventPrice == 0 ? null : "Starts at $"}
            {eventPrice == 0 ? "Free" : eventPrice}
          </h3>
          <div>
            <h3 className="card-caption">{eventOrganizer}</h3>
            <div className="flex flex-row ">
              <svg
                className="w-4 h-4"
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
              <h3 className="card-caption items-start m-0 pt-0 px-2">
                100 Followers
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default EventCard;
