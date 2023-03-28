import { createServer } from "miragejs";

const data = require("../data/data.json");

export default function server() {
  createServer({
    routes() {
      this.get("https://api.eventbrite.com/get-todos", () => data);
      this.get("https://api.eventbrite.com/get-events", () => data);
      this.post("https://api.eventbrite.com/get-user", (schema, request) => {
        const email = request.queryParams.email;
        const password = request.queryParams.password;

        console.log("email: ", email);
        console.log("password: ", password);

        const user = data.find((user) => user.email == email);
        if (user) {
          return user;
        } else {
          return { error: "User not found" };
        }
      });
    },
  });
}
