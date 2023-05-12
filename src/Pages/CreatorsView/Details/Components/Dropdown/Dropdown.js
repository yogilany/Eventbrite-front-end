import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "./Dropdown.css";
import { useState } from "react";
import { Nav } from "react-bootstrap";
const Dropdown = ({ Name, Links }) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <div className="Dropdown">
      <a
        data-testid="dropdownLink"
        href="#"
        className="drop__btn"
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        {Name}{" "}
        {toggleBtn ? (
          <AiOutlineArrowUp className="arrow__Logo" />
        ) : (
          <AiOutlineArrowDown className="arrow__Logo" />
        )}
      </a>
      {toggleBtn && (
        <div className="linkss" data-testid="dropdownLinks">
          {Links.map((Link, i) => {
            return (
              <Nav.Item>
                <Nav.Link key={i} eventKey="sixth" className="EventOption">
                    {Link.name}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
