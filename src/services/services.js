import axios from "axios";

export const getUsers = async () => {
  var usersData = [];

  await axios
    .get(`${process.env.REACT_APP_BASE_FAKE_API}/users`)
    // .then((response) => response.json())
    .then((response) => {
      // console.log("response: ", response);
      usersData = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return usersData;
};

export const addUser = async ({ name, username, email, password }) => {
  // console.log("IN SERVICE ", email, password, username, name);
  await axios
    .post(`${process.env.REACT_APP_BASE_FAKE_API}/users`, {
      name: name,
      username: username,
      email: email,
      password: password,
    })
    .then((response) => {
      // console.log("response: ", response);
    })
    .catch((error) => {
      console.log(error);
    });

  return true;
};

export const getEvents = async ({ category }) => {
  var eventsData = [];

  await axios
    .get(`${process.env.REACT_APP_BASE_FAKE_API}/events`)
    // .then((response) => response.json())
    .then((response) => {
      eventsData = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return eventsData;
};
