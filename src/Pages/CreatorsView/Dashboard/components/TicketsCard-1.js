import React from "react";

const TicketsCard = () => {
  return (
    <div className="dashboard-card">
      <h5 className="card-small-title">Ticktes Sold</h5>
      <h3 className="card-large-title">
        <span className="sold">5</span>
        <span className="total">/100</span>
      </h3>{" "}
      <h6 className="card-small-subtitle">0 Paid - 5 Free</h6>
    </div>
  );
};

export default TicketsCard;
