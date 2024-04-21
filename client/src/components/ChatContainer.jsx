import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

function ChatContainer() {
  const socketio = socketIOClient(`http://localhost:5000`);

  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem(`user`));
  const [avatar, setAvatar] = useState(localStorage.getItem(`avatar`));

  useEffect(() => {
    socketio.on(`chat`, (senderChats) => {
      setUser(senderChats);
    });
  }, []);

  function sendChatToSocket(chat) {
    socketio.emit(`chat`, chat);
  }

  function addMessage(chat) {
    const newChat = { ...chat, user, avatar };
    setChats([...chats, newChat]);
    sendChatToSocket([...chats, newChat]);
  }

  return <div>hello</div>;
}
export default ChatContainer;
