from http.server import HTTPServer, BaseHTTPRequestHandler


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()

        self.wfile.write(b"Hello from Python!")


server = HTTPServer(("localhost", 8082), Handler)

print("Server running on :8082")

server.serve_forever()
