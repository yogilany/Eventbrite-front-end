import axios from "axios";

export const getUsers = ({ email, password }) => {
  return axios.post("https://api.eventbrite.com/get-user", [], {
    params: { email: email, password: password },
  });
};
