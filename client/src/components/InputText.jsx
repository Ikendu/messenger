import { useState } from "react";

function InputText({ addMessage }) {
  const [message, setMessege] = useState(``);
  function handleClick() {
    addMessage(message);
    setMessege(``);
  }
  return (
    <div className="grid grid-cols-6 m-10 gap-3">
      <textarea
        className="w-full col-span-5 rounded-2xl h-36 p-3 px-5 "
        placeholder="write a message"
        value={message}
        onChange={(e) => setMessege(e.target.value)}
      />
      <div>
        <button
          onClick={handleClick}
          className="rounded-2xl bg-green-800 text-white p-3 px-6"
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default InputText;
