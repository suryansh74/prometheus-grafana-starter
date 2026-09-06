import http from "http";
const server = http.createServer((req, res) => {
  if (req.method != "get" && req.url == "/") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end("hello from node");
    return;
  }
  res.writeHead(404);
  res.end("not found");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
