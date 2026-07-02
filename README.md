# websocket-chat-app
A simple WebSocket chat application built with **Node.js**, **Express**, and the **ws** library.

## Features

- WebSocket connection between client and server
- Send messages from the browser
- Receive responses from the server in real time
- Simple HTML/CSS frontend

## Technologies Used

- Node.js
- Express
- ws (WebSocket library)
- HTML
- CSS
- JavaScript

## Project Structure

```
.
├── client/
│   └── index.html
├── server/
│   ├── index.js
│   └── package.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/websocket-chat-app.git
```

2. Navigate to the project folder

```bash
cd websocket-chat-app
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node server.js
```

The server will run on:

```
http://localhost:8000
```

5. Open `index.html` in your browser.

## How It Works

- The browser connects to the WebSocket server.
- When a user sends a message, it is transmitted to the server.
- The server logs the message and replies with:

```
thanks buddy!
```

- The client displays all messages in the browser.


