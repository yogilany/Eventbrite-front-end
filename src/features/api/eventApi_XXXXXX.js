import axios from "axios";

/**
 * @description Create event API
 * @date 5/9/2023 - 4:09:20 PM
 * @author h4z3m
 *
 * @async
 * @param {*} eventData Event data object
 * @param {*} userToken User token fetched from local storage
 * @returns {unknown}
 */
export const createEvent = async (eventData, userToken) => {
  try {
    eventData.date_and_time.start_date_time = new Date(
      eventData.date_and_time.start_date_time
    )
      .toISOString()
      .slice(0, -5);
    eventData.date_and_time.end_date_time = new Date(
      eventData.date_and_time.end_date_time
    )
      .toISOString()
      .slice(0, -5);
    console.log("eventData: ", eventData);

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_API}/events/create`,
      JSON.stringify(eventData),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
