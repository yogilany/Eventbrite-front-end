// import { render, screen } from "@testing-library/react";
// import SingleEvent from "../SingleEvent";
// import renderWithProviders from "src/test_utils";

// describe("SingleEvent", () => {
//   test("renders event name", async () => {
//     const mockEvent = {
//       id: 1,
//       basic_info: { title: "Test Event" },
//       summary: "This is a test event.",
//       creator_id: 2,
//       location: "Test Location",
//       date_and_time: {
//         start_date_time: "2023-05-12T19:00:00.000Z",
//         end_date_time: "2023-05-13T19:00:00.000Z",
//       },
//       description: "This is a test event description.",
//       image_link: "https://test-image.com",
//     };
//     jest.mock("react-router-dom", () => ({
//       ...jest.requireActual("react-router-dom"),
//       useParams: () => ({ id: mockEvent.id }),
//     }));

//     jest.mock("../../../features/api/eventApi", () => ({
//       useGetEventByIdQuery: () => ({ data: mockEvent }),
//     }));

//     renderWithProviders(<SingleEvent />);
//     const eventName = await screen.findByText(mockEvent.basic_info.title);
//     expect(eventName).toBeInTheDocument();
//   });
// });
