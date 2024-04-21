import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import UserLogin from "./UserLogin";
import { ChatBoxReciever, ChatBoxSender } from "./ChatBox";

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

  function logUserOut() {
    localStorage.removeItem(`user`);
    localStorage.removeItem(`avater`);
    setUser(``);
    // window.location.reload();
  }

  function ChatsList() {
    return chats.map((chat, index) => {
      chat.user === user ? (
        <ChatBoxSender
          key={index}
          message={chat.message}
          avatar={chat.avatar}
        />
      ) : (
        <ChatBoxReciever
          key={index}
          message={chat.message}
          avatar={chat.avatar}
        />
      );
    });
  }

  return (
    <div>
      user?
      <div>
        <header className="flex justify-between">
          <p>User name: {user}</p>
          <button className="bg-red-500 p-2 px-5" onClick={logUserOut}>
            Logout
          </button>
        </header>
      </div>
      :
      <div>
        <UserLogin setUser={setUser} />
      </div>
    </div>
  );
}
export default ChatContainer;
