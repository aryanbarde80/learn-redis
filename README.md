# Learn Redis 🚀

Welcome to **Learn Redis**, a structured guide documenting my journey of learning Redis. This repository covers essential Redis concepts, commands, and practical usage with **Redis Stack** inside a **Docker container**.

## 📌 Table of Contents

- [About Redis](#about-redis)
- [Installation & Setup](#installation--setup)
- [Running Redis in Docker](#running-redis-in-docker)
- [Basic Redis Commands](#basic-redis-commands)
- [Using Redis Stack](#using-redis-stack)
- [Useful Links](#useful-links)
- [Contributing](#contributing)
- [License](#license)

---

## 🔥 About Redis

[Redis](https://redis.io/) is an open-source, in-memory data store used as a **database**, **cache**, and **message broker**. It supports various data structures like Strings, Lists, Sets, Hashes, and more.

## 🛠 Installation & Setup

Before diving into Redis, ensure you have **Docker** installed on your system.

### 1️⃣ Install Docker
- **Windows & Mac:** Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **Linux:** Follow instructions from [Docker Docs](https://docs.docker.com/engine/install/)

### 2️⃣ Verify Docker Installation
```bash
docker --version
```
If Docker is installed correctly, it will return the installed version.

## 🐳 Running Redis in Docker

Now, let's run Redis inside a Docker container.

### Start Redis Container:
```bash
docker run --name redis-container -d -p 6379:6379 redis
```
This command will:
- Pull the latest Redis image (if not available locally)
- Run it as a background service (`-d` for detached mode)
- Expose Redis on port **6379**

### Access Redis CLI
```bash
docker exec -it redis-container redis-cli
```
You should now see a Redis shell (`127.0.0.1:6379>`), where you can enter Redis commands.

## 📌 Basic Redis Commands

Here are some fundamental Redis commands to get started:
```bash
SET key value      # Store a value
GET key           # Retrieve a value
DEL key           # Delete a key
EXISTS key        # Check if key exists
INCR counter      # Increment a value
LPUSH list value  # Add to list (left side)
LRANGE list 0 -1  # Get all list elements
```

## ⚡ Using Redis Stack

**Redis Stack** extends Redis with additional features like JSON, Search, Graph, and Time Series. To use it:

### Run Redis Stack in Docker:
```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack
```
This will:
- Start **Redis Stack**
- Enable RedisInsight (GUI tool) on **port 8001**

### Access RedisInsight (GUI):
Open [http://localhost:8001](http://localhost:8001) in your browser and connect to Redis.

## 🔗 Useful Links

- [Redis Official Website](https://redis.io/)
- [Docker Hub - Redis](https://hub.docker.com/_/redis)
- [Redis Commands Reference](https://redis.io/commands)
- [Redis Stack](https://redis.io/docs/stack/)

## 🤝 Contributing
Feel free to submit issues, suggest improvements, or contribute by submitting a pull request.

## 📜 License
This repository is open-source and available under the [MIT License](LICENSE).

---

Happy Learning! 🚀

