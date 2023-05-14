import React from "react";
import { shallow } from "enzyme";
import SalesTable from "../Components/SalesTable-1";

describe("SalesTable", () => {
  const tickets = [
    {
      name: "Ticket 1",
      price: 10,
      max_quantity: 100,
      available_quantity: 50,
    },
    {
      name: "Ticket 2",
      price: 20,
      max_quantity: 200,
      available_quantity: 100,
    },
  ];

  const event = {
    id: "event-001",
  };

  it("should render correct ticket information", () => {
    const wrapper = shallow(<SalesTable tickets={tickets} event={event} />);
    const rows = wrapper.find("tbody tr");
    expect(rows.length).toBe(2);
    expect(rows.at(0).find("td").at(0).text()).toBe(tickets[0].name);
    expect(rows.at(0).find("td").at(1).text()).toBe(`${tickets[0].price}`);
    expect(rows.at(0).find("td").at(2).text()).toBe(
      `${tickets[0].max_quantity - tickets[0].available_quantity}`
    );
    expect(rows.at(1).find("td").at(0).text()).toBe(tickets[1].name);
    expect(rows.at(1).find("td").at(1).text()).toBe(`${tickets[1].price}`);
    expect(rows.at(1).find("td").at(2).text()).toBe(
      `${tickets[1].max_quantity - tickets[1].available_quantity}`
    );
  });
});
