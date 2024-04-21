import { ChatBoxReciever, ChatBoxSender } from "./components/ChatBox";

function App() {
  return (
    <div className=" bg-slate-300 h-screen">
      <h1 className="font-bold text-2xl">Life Chat</h1>
      <ChatBoxReciever
        avatar={`https://picsum.photos/200/300`}
        message={`hello my brother`}
        user={`Younglife`}
      />
      <ChatBoxSender
        avatar={`https://picsum.photos/id/237/200/300`}
        message={`hello my dear`}
        user={`Victor`}
      />
    </div>
  );
}

export default App;
