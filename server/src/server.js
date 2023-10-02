const http = require("http");

const { loadPlanetsData } = require("./models/planets.model.js");
const app = require("./APP.JS");
const PORT = process.env.PORT || 8000; // to avoid conflict with our front end

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
  });
}
startServer();
