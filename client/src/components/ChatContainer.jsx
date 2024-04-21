import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

function ChatContainer() {
  const socketio = socketIOClient(`http://localhost:5000`);

  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem(`user`));
  const [avatar, setAvatar] = useState(localStorage.getItem(`avatar`));

  useEffect(() => {
    socketio.on(`chat`, (senderChat) => {
      setUser(senderChat);
    });
  }, []);

  return <div>hello</div>;
}
export default ChatContainer;
