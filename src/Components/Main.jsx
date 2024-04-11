import ChatUI from "./ChatUI";
import MessageBar from "./MessageBar";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="h-[800px] w-[360px] bg-white mx-auto rounded-3xl mb-28 p-2">
      <Navbar />
      <ChatUI />
      <MessageBar />
    </div>
  );
}

export default Main;
