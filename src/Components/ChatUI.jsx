function ChatUI() {
  return (
    <div className="w-full flex flex-col">
      <div className="p-4">
        <div className="w-[250px] rounded-2xl bg-gradient-to-r from-[#E5EEFF] to-[#FFFFFF] overflow-hidden p-4 mt-4 font-poppins text-sm leading-[19.5px]">
          Hi Sam! I am your personal shopping assistant, how can i help you
          today?
        </div>
        <p className="px-2 py-1 text-left text-[#333333] text-xs/[13px]">
          4:45 PM
        </p>
      </div>
      <div className="px-4 py-1">
        <div className="w-[250px] rounded-2xl bg-[#DCF7C5] overflow-hidden p-4 font-poppins text-sm leading-[19.5px] ml-16">
          I am looking for a hand bag, with long strap.
        </div>
        <p className="px-2 py-1 text-[#333333] text-xs/[13px] text-right">
          4:46 PM
        </p>
      </div>
      <p className="text-[#949494] font-poppins text-sm mb-2 p-3 mx-3">
        Popular tags for handbag
      </p>
      <div className="flex flex-wrap gap-[10px] px-3 mx-1">
        <span className="inline-flex items-center h-[30px] px-2 py-1 rounded-lg text-xs bg-[#F2F7FF] text-[#4C82EF] border-solid border-2 border-[#4C82EF] font-poppins">
          Clutch
        </span>
        <span className="inline-flex items-center px-2 h-[30px] py-1 rounded-lg text-xs  bg-[#F2F7FF] text-[#4C82EF] border-solid border-2 border-[#4C82EF] font-poppins">
          Fabric lining
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs  bg-[#F2F7FF] text-[#4C82EF] border-solid border-2 border-[#4C82EF] font-poppins">
          Baggit
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs bg-[#F2F7FF] text-[#4C82EF] border-solid border-2 border-[#4C82EF] font-poppins">
          Multi
        </span>
        <span className="text-xl text-[#949494]">&gt;</span>
      </div>

      <div className="w-[250px] h-[141px] rounded-2xl bg-gradient-to-r from-[#E5EEFF] to-[#FFFFFF] mt-4 mx-4">
        <div className="h-[71px] rounded-2xl m-2 bg-white overflow-hidden flex text-xs">
          <img
            className="object-cover rounded-lg overflow-hidden m-2"
            src="/src/assets/bag.png"
            alt=""
          />
          <div>
            <p className="font-poppins mt-2 flex">
              Bags on <span className="font-medium">Timpu</span>
              <img
                className="h-[15px] w-[14px]"
                src="/src/assets/Vector.jpg"
                alt=""
              />
            </p>
            <p className="text-[#949494] font-poppins text-xs mt-4">
              1123 products <span className="text-sm">&gt;</span>
            </p>
          </div>
        </div>
        <p className="font-poppins text-sm leading-[19.5px] p-2">
          Or select filter and help us choose the best bag for you.
        </p>
        <p className="px-2 py-1 text-left text-[#333333] text-xs/[13px]">
          4:48 PM
        </p>
      </div>

      <div className="mt-8 px-4">
        <div className="flex justify-between">
          <div className="font-poppins text-[13px] text-[#949494]">
            Select filters
          </div>
          <div className="flex">
            <img src="/src/assets/sliders-horizontal.png" alt="" />
            <div className="font-poppins text-[13px] text-[#949494]">
              Filter
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[10px] px-3 mx-1 mt-1">
        <span className="inline-flex items-center h-[24px] px-2 py-1 rounded-[5px] text-[13px] bg-[#F2F7FF] text-[#4C82EF] border-solid border-2 border-[#4C82EF] font-poppins">
          Strap - Long &times;
        </span>
        <span className="inline-flex items-center h-[24px] px-2 py-1 rounded-[5px] text-[13px] bg-[#F2F7FF] text-[#737373]  font-poppins">
          Colour &times;
        </span>
        <span className="inline-flex items-center h-[24px] px-2 py-1 rounded-[5px] text-[13px] bg-[#F2F7FF] text-[#737373]  font-poppins">
          Size &times;
        </span>
        <span className="inline-flex items-center h-[24px] px-2 py-1 rounded-[5px] text-[13px] bg-[#F2F7FF] text-[#737373]  font-poppins">
          Brand &times;
        </span>
        <span className="inline-flex items-center h-[24px] px-2 py-1 rounded-[5px] text-[13px] bg-[#F2F7FF] text-[#737373]  font-poppins">
          Material &times;
        </span>
      </div>
    </div>
  );
}

export default ChatUI;
