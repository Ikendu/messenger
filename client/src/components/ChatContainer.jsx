import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import UserLogin from "./UserLogin";
import { ChatBoxReciever, ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";

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
      if (chat.user === user)
        return (
          <div>
            <ChatBoxSender
              key={index}
              message={chat.message}
              avatar={chat.avatar}
              user={chat.user}
            />
          </div>
        );
      return (
        <div>
          <ChatBoxReciever
            key={index}
            message={chat.message}
            avatar={chat.avatar}
            user={chat.user}
          />
        </div>
      );
    });
  }

  return (
    <div>
      {user ? (
        <div>
          <header className="flex justify-between">
            <p>User name: {user}</p>
            <button className="bg-red-500 p-2 px-5" onClick={logUserOut}>
              Logout
            </button>
          </header>
          <ChatsList />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <div>
          <UserLogin setUser={setUser} />
        </div>
      )}
    </div>
  );
}
export default ChatContainer;
