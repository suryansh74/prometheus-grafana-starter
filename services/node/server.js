const http = require("http");
const client = require("prom-client");

// Create a Registry
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Custom metrics
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "path", "status"],
  registers: [register],
});

const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "path"],
  registers: [register],
});

const server = http.createServer(async (req, res) => {
  const start = process.hrtime.bigint();

  // Metrics endpoint
  if (req.url === "/metrics") {
    res.setHeader("Content-Type", register.contentType);
    res.end(await register.metrics());
    return;
  }

  // Hello endpoint
  if (req.method === "GET" && req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node!");

    const duration = Number(process.hrtime.bigint() - start) / 1e9;
    httpRequestsTotal.inc({ method: "GET", path: "/hello", status: "200" });
    httpRequestDuration.observe({ method: "GET", path: "/hello" }, duration);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

const PORT = 8080;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Node service running on http://0.0.0.0:${PORT}`);
});
