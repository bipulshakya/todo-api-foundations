//import the express module
const express = require("express");
const todosRoutes = require("./routes/todos.routes");
//This calls the express function and creates an Express application instance. This instance is used to configure the server, define routes, and handle incoming requests.
const app = express();

const PORT = 3000;
const Hostname = "Localhost";

//Express middleware to parse JSON request bodies
app.use(express.json());

//Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

//mounts an express router on the /todos path. This means that any requests to /todos will be handled by the todosRoutes router.
app.use("/todos", todosRoutes);

app.listen(PORT, Hostname, () => {
  console.log(`Server is running on http://${Hostname}:${PORT}`);
});
