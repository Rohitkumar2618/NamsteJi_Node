const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/gogo") {
    res.end("gogo");
  }
  res.end("Hello, world!");
});

server.listen(3000, () => console.log("Server is running on port 3000"));
