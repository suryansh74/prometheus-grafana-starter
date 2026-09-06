package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

const addr = "localhost:8081"

func main() {
	fmt.Println("Go service starting... (write your code here)")
	server := http.NewServeMux()
	server.HandleFunc("/", EnteryPointHandler)
	if err := http.ListenAndServe(addr, server); err != nil {
		log.Println("http error", err)
	}
}

func EnteryPointHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]any{"message": "Hello from go"})
}
