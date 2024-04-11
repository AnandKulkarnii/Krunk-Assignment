function Navbar() {
  return (
    <div className="w-full h-20 p-3 rounded-t-2xl bg-slate-200">
      <div className="flex gap-2">
        <div className="relative">
          <img src="/src/assets/SIMPLE CHATBOTS.png" alt="" />
          <span className="h-[8px] w-[8px] bg-[#3FE225] rounded-full absolute bottom-0 right-0"></span>
        </div>
        <div>
          <div className="flex gap-2">
            <span className="text-[#4C82EF] text-lg font-semibold">Timpu</span>
            <img
              className="h-[15px] w-[14px]"
              src="/src/assets/Vector.jpg"
              alt=""
            />
          </div>
          <p className="text-[#4C82EF] font-medium">Chat Assistant</p>
        </div>
        <div className="flex gap-1 ml-20 mt-5">
          <div className="h-[8px] w-[8px] bg-[#3FE225] rounded-full mt-5"></div>
          <div className="mt-2 text-[#4C82EF] font-medium">Online</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
