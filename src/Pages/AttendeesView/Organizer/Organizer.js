import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./Organizer.css";
import Head from "./Components/Head";
import Myphoto1 from "../../../assets/Organizer/AnasOrg.jpg";
import Events from "./Components/Events";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useGetUserQuery } from "src/features/api/userApi";


/**
 *  
 * @author Anas Sherif
 * @returns {JSX.Element}
 * @description This is the Organizer page for the users view of the app
 * @param {*} props
  */

function Organizer() {
  const { id } = useParams();
  const { data: organizerData } = useGetUserQuery(id);
  // console.log(organizerData);
  return (
    <Container>
      <div className="bg">
        <div className="content">
          <Head
            photo={organizerData?.avatar_url}
            name={organizerData?.firstname + " " + organizerData?.lastname}
            followers="120"
            totalevents="2"
            info="This is Anas Organization for mastering sorcery around the world, our goal here is to develop newborn sorcerers with magical abilities, join us in our journey and we promise, you wont regret it :)"
          />
          <div className="lowersection">
            <div className="scrollmenu">
              <a href="google.com">Events</a>
            </div>
            <p className="select">Events</p>
            <div className="uporpast">
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton
                  data-testid="tbg-radio-1"
                  id="tbg-radio-1"
                  value={1}
                  role="radio"
                >
                  Upcoming (1)
                </ToggleButton>
                <ToggleButton
                  data-testid="tbg-radio-2"
                  id="tbg-radio-2"
                  value={2}
                  role="radio"
                >
                  Past (1)
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="Cards">
              <Events
                title="Dr Stephen Strange"
                date="Sunday, March 12, 2023"
                loc="Earth 616"
                price="Starts from 12.5 EGP"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Organizer;
