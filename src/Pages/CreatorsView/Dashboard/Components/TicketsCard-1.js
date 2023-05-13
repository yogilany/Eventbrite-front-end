import React, { useEffect } from "react";

const TicketsCard = ({tickets,total,sold}) => {



  return (
    <div className="dashboard-card">
      <h5 className="card-small-title">Ticktes Sold</h5>
      <h3 className="card-large-title">
        <span className="sold">{sold}</span>
        <span className="total">/{total}</span>
      </h3>{" "}
      <h6 className="card-small-subtitle">0 Paid - 5 Free</h6>
    </div>
  );
};

export default TicketsCard;
