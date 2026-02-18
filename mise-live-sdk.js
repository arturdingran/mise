class MiseLiveSDK {
  constructor(url) {
    this.url = url;
    this.ws = null;
  }

  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log("Connected to Mise Live Server");
    };

    this.ws.onmessage = (event) => {
      console.log("Receive:", event.data);
    };

    this.ws.onclose = () => {
      console.log("Connection Closed");
    };
  }

  joinRoom(roomId, user) {
    this.ws.send(JSON.stringify({
      action: "join",
      room: roomId,
      user: user
    }));
  }

  sendMessage(message) {
    this.ws.send(JSON.stringify({
      action: "chat",
      message: message
    }));
  }
}

if (typeof module !== "undefined") {
  module.exports = MiseLiveSDK;
}
