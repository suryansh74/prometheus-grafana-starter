FROM golang:1.22-alpine AS builder

WORKDIR /app
COPY go.mod main.go ./
RUN go mod tidy && go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o server .

FROM alpine:3.20
WORKDIR /root/
COPY --from=builder /app/server .
EXPOSE 8080
CMD ["./server"]
