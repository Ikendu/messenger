import { useState } from "react";
import socketIOClient from "socket.io-client";

function ChatContainer() {
  const socketio = socketIOClient(`https://localhost:5000`);

  const [caht, setChat] = useState([]);
  const [user, setUser] = useState(localStorage.getItem(`user`));
  const [avatar, setAvatar] = useState(localStorage.getItem(`avatar`));

  return <div>hello</div>;
}
export default ChatContainer;
