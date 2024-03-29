import React from "react";
import { Stack } from "react-bootstrap/";
import * as FaIcons from "react-icons/fa";
import * as AIicons from "react-icons/ai";
import "../SingleEvent.scss";
export const EventShare = (props) => {
  return (
    <div>
      <h3 className="header-text">Share with friends</h3>
      <Stack gap={4} direction="horizontal" style={{ maxWidth: "50vw" }}>
        <FaIcons.FaFacebookF size="24px" style={{ color: "#4b4d63" }} />
        <FaIcons.FaFacebookMessenger size="24px" style={{ color: "#4b4d63" }} />
        <FaIcons.FaLinkedin size="24px" style={{ color: "#4b4d63" }} />
        <FaIcons.FaTwitter size="24px" style={{ color: "#4b4d63" }} />
        <AIicons.AiOutlineMail size="24px" style={{ color: "#4b4d63" }} />
      </Stack>
    </div>
  );
};
