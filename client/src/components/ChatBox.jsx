import { Avatar, Image } from "antd";

export function ChatBoxReciever({ key, avatar, user, message }) {
  return (
    <div key={key} className="flex gap-2 justify-start mx-2">
      <Avatar
        size={50}
        src={
          <Image
            src={avatar}
            className="w-11 h-11 rounded-full object-cover bg-slate-500"
            preview={false}
          />
        }
      />
      <div className="bg-blue-300 p-2 rounded-md max-w-[60%]  ">
        <p className="font-bold">{user}</p>
        {message}
      </div>
    </div>
  );
}

export function ChatBoxSender({ avatar, user, message }) {
  return (
    <div className="flex gap-2 flex-row-reverse mx-2">
      <Avatar
        size={50}
        src={
          <Image
            src={avatar}
            className="w-11 h-11 rounded-full object-cover"
            preview={false}
          />
        }
      />
      <div className="bg-green-300 p-2 rounded-md max-w-[60%] ">
        <p className="font-bold">{user}</p>
        {message}
      </div>
    </div>
  );
}
