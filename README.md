# Prometheus + Grafana Starter (Learn by Building)

This is a **clean starter** so you can build everything yourself step by step.

## Learning Path (follow in order)

### Phase 1 – Basic Services
1. Write a simple HTTP server in **Node.js** (`services/node`)
2. Write a simple HTTP server in **Go** (`services/go`)
3. Write a simple HTTP server in **Python** (`services/python`)
4. Write Dockerfiles for each service
5. Complete `docker-compose.yml` so all 3 services run

### Phase 2 – Add Metrics
6. Add Prometheus metrics (`/metrics` endpoint) to each service
7. Configure `prometheus/prometheus.yml` to scrape the services
8. Add Prometheus + Grafana to `docker-compose.yml`

### Phase 3 – Visualization
9. Open Grafana and create your own dashboard
10. Create panels for:
    - Requests Per Second (RPS)
    - Latency
    - CPU
    - Memory

### Phase 4 – Load Testing
11. Generate load and observe the differences

---

## How to start

```bash
git clone https://github.com/suryansh74/prometheus-grafana-starter.git
cd prometheus-grafana-starter
```

Then wait for my step-by-step instructions.
