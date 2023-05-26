const { shallow } = require("enzyme");
const { default: DashboardHeader } = require("../Components/DashboardHeader-1");

describe("DashboardHeader", () => {
  const tickets = 5;
  const sold = 3;
  const total = 10;

  it("renders correctly", () => {
    const wrapper = shallow(
      <DashboardHeader tickets={tickets} sold={sold} total={total} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the TicketsCard component with the correct props", () => {
    const wrapper = shallow(
      <DashboardHeader tickets={tickets} sold={sold} total={total} />
    );
    const ticketsCard = wrapper.find("TicketsCard");
    expect(ticketsCard.prop("tickets")).toEqual(tickets);
    expect(ticketsCard.prop("sold")).toEqual(sold);
    expect(ticketsCard.prop("total")).toEqual(total);
  });

  it("renders the ViewsCard component", () => {
    const wrapper = shallow(
      <DashboardHeader tickets={tickets} sold={sold} total={total} />
    );
    expect(wrapper.find("ViewsCard")).toHaveLength(1);
  });

  it("does not render the Recommendations component", () => {
    const wrapper = shallow(
      <DashboardHeader tickets={tickets} sold={sold} total={total} />
    );
    expect(wrapper.find("Recommendations")).toHaveLength(0);
  });
});
