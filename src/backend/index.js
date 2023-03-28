const express = require("express");
const todos = require("../data/todos/todos.json");

const app = express();

// new API route: GET /users, returning a list of users
app.get("/users", (request, response) => {
  response.json(todos);
});

app.listen(3005, () => {
  console.log("Our app is listening for request on port 3005");
});
