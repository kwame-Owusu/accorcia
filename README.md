# Accorcia

**Accorcia**(shorten in italian) is a URL shortener service with a frontend that consumes it.
It receives normal URL's then uses a base58 encoding to hash and create random links, which if visited
redirects to the original URL.

## Features

The main feature the project is to shorten long URL's using base58 encoding algorithm.
But it also makes use of a redis-server as data store, if this was going to be a bigger project,
or had more time to tend to it, redis would have acted more as a "hot" data store and used a proper DB for storage.

## Tech Stack

| Layer              | Technology        |
| ------------------ | ----------------- |
| Frontend           | TypeScript, React |
| Backend / API      | Go + Gin          | 
| Database / Storage | Redis             |


I used Gin to try it out, but I believe what has been done in this project is quite simple enough that std library can suffice.
In the end there are only two endpoints that are being served, nothing too complex, this was just an opportunity for me to learn about Gin.

## Installation & Setup

Below is a generic setup guide. Adapt paths, configuration, and tooling depending on your environment.

### 1. Clone the repository

```bash
git clone https://github.com/kwame-Owusu/umore.git
```

Before we can run the server, it's important to have redis-server,
so make sure to install it, depending on what OS you are using. I am using
WSL2 on windows so you can get it from [here](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-windows/).
I would also encourage getting redis-cli to make it possible to interact with the redis server, outside of the redis-go SDK.

For running the redis server and interacting with it, I found setting an alias in my shell config much easier to work it.

```bash
alias redis-start="sudo systemctl start redis-server"
```

```bash
redis-start
go run cmd/*.go
```

## Demo


https://github.com/user-attachments/assets/fec66a7a-bf9a-413d-916e-eb10e1141f1f


## Learning

Learn a bit more about the Gin web framework for golang and also about Base58 encoding, and why it might be better
than Base64 for some cases, I also found out that Base58 is what bitcoin uses, because it makes encoded text more readable and easy to copy and paste around.
