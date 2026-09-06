package main

import (
	"fmt"
	"net/http"
)

// TODO: 
// 1. Create a simple HTTP server
// 2. Add a /hello endpoint
// 3. Add a /metrics endpoint (Prometheus)
// 4. Later add request counting and latency metrics

func main() {
	fmt.Println("Go service starting... (write your code here)")

	// Example skeleton:
	// http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
	//     w.Write([]byte("Hello from Go"))
	// })
	// http.ListenAndServe(":8080", nil)
}
