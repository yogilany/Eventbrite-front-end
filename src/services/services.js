export const getTodos = () => {
  return fetch("http://localhost:8000/todos").then((response) =>
    response.json()
  );
};

export const getUsers = () => {
  return fetch("http://localhost:8000/users").then((response) =>
    response.json()
  );
};

export const getEvents = ({ category }) => {
  console.log("categoryyy: ", category);
  return fetch("http://localhost:8000/events").then((response) =>
    response.json()
  );
};
