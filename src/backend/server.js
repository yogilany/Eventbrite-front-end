// import { createServer } from "miragejs";

// const todos = require("../data/todos/todos.json");
// const users = require("../data/users/users.json");
// const events = require("../data/events/events.json");

// export default function server() {
//   createServer({
//     routes() {
//       this.get("https://api.eventbrite.com/get-todos", () => todos);
//       this.get("https://api.eventbrite.com/get-events", () => events);
//       this.post("https://api.eventbrite.com/get-user", (schema, request) => {
//         const email = request.queryParams.email;
//         const password = request.queryParams.password;

//         console.log("email: ", email);
//         console.log("password: ", password);

//         const user = users.find((user) => user.email == email);
//         if (user) {
//           return user;
//         } else {
//           return { error: "User not found" };
//         }
//       });
//     },
//   });
// }
