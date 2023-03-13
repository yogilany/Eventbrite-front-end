import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./Organizer.css";
import Head from "./Components/Head";
import Myphoto1 from "../../../assets/Organizer/AnasOrg.jpg";
import Events from "./Components/Events";
import { Container } from "react-bootstrap";

// make function

function Organizer() {
  return (
    <Container>
      <div className="bg">
        <div className="content">
          <Head
            photo={Myphoto1}
            name="Anas Org for mastering sorcery"
            followers="120"
            totalevents="2"
            info="This is Anas Organization for mastering sorcery around the world, our goal here is to develop newborn sorcerers with magical abilities, join us in our journey and we promise, you wont regret it :)"
          />
          <div className="lowersection">
            <div class="scrollmenu">
              <a href="#">Events</a>
            </div>
            <p className="select">Events</p>
            <div className="uporpast">
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" value={1}>
                  Upcoming (1)
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
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
