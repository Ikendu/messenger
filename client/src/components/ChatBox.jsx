import { Avatar, Image } from "antd";

export default function ChatBoxReciever({ avatar }) {
  return (
    <div>
      <Avatar
        size={50}
        src={
          <Image
            src={avatar}
            className="w-11 h-11 rounded-full object-cover bg-slate-500"
            // preview={false}
          />
        }
      />
    </div>
  );
}

export function ChatBoxSender() {
  return <div>ChatBox</div>;
}
