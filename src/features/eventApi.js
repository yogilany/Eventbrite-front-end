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
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_API}/users/me/info`,
      JSON.stringify(eventData),
      {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
