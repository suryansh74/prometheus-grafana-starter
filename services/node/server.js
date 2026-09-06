const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node!");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Node service running on http://localhost:${PORT}`);
});
