function MessageBar() {
  return (
    <div className="bg-[#F4F4F4] mt-2 h-[80px] rounded-b-3xl ">
      <div className="relative flex mt-3">
        <input
          className="w-[265px] h-[40px] mx-2 my-1   rounded-[10px] placeholder:px-3 font-poppins text-[13px] mt-2"
          type="text"
          placeholder="Type your message"
        />
        <img
          src="/src/assets/paperclip.png"
          alt="Paper Clip"
          className="h-5 w-5 text-gray-500 absolute left-56 top-5"
        />
        <div className="p-1">
          <button className="w-[70px] h-[40px] rounded-[10px] bg-[#4C82EF] text-white text-xl mt-1 ">
            <img className="m-auto " src="/src/assets/Vector.png" alt="" />
          </button>
        </div>
      </div>
      <div className="text-[#B1B1B1] font-poppins text-[13px] flex items-center justify-center gap-1 mt-2">
        Powered by <span className="font-semibold"> Krunk.ai</span>
        <img src="/src/assets/Logo.jpg" alt="" />
      </div>
    </div>
  );
}

export default MessageBar;
