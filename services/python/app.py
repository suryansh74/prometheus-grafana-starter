from http.server import HTTPServer, BaseHTTPRequestHandler
from prometheus_client import Counter, Histogram, generate_latest, CONTENT_TYPE_LATEST
import time

# Metrics
http_requests_total = Counter(
    "http_requests_total", "Total number of HTTP requests", ["method", "path", "status"]
)

http_request_duration = Histogram(
    "http_request_duration_seconds",
    "Duration of HTTP requests in seconds",
    ["method", "path"],
)


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        start = time.time()

        if self.path == "/metrics":
            self.send_response(200)
            self.send_header("Content-Type", CONTENT_TYPE_LATEST)
            self.end_headers()
            self.wfile.write(generate_latest())
            return

        if self.path == "/hello":
            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(b"Hello from Python!")

            duration = time.time() - start
            http_requests_total.labels(method="GET", path="/hello", status="200").inc()
            http_request_duration.labels(method="GET", path="/hello").observe(duration)
            return

        self.send_response(404)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(b"Not Found")

    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", 8080), Handler)
    print("Python service running on http://0.0.0.0:8080", flush=True)
    server.serve_forever()
