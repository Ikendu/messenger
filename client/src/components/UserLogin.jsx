import { useState } from "react";
import ChatIcon from "../assets/ChatIcon";

function UserLogin() {
  const [user, setUser] = useState(``);
  return (
    <div className="h-screen flex flex-col gap-20 justify-center items-center">
      <div className="flex gap-3 items-center">
        <ChatIcon />
        <h2 className="text-3xl font-bold text-green-800">User Login</h2>
      </div>
      <div className="flex gap-3 w-[50%]">
        <input
          className="border-2 border-green-500 w-full rounded-md px-4 p-1"
          placeholder="enter username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="text-lg font-bold text-white px-6 py-3 bg-green-500 rounded-md">
          Enter
        </button>
      </div>
    </div>
  );
}
export default UserLogin;
