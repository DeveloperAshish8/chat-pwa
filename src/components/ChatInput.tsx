import React from "react";

const ChatInput = () => {
  return (
    <div className="py-3 px-4 relative w-[390px] h-16  box-border rounded">
      <input
        className="w-[95%] px-3 py-4  rounded-lg text-xs bg-white"
        placeholder="Reply to @Rohit Yadav"
      />
      <div className="absolute right-12 top-6 flex gap-3 items-center">
        <div className="group relative inline-block whitespace-nowrap">
          <span className="flex size-6 cursor-pointer items-center justify-center rounded-full  text-sm font-semibold text-[white]">
            <img src="/media.svg" alt="icon" />
          </span>

          <span
            role="tooltip"
            className="pointer-events-none absolute z-50 inline-flex items-center justify-center rounded-3xl p-3 font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-[#008000] text-[white] min-h-7 text-sm left-1/2 -translate-x-1/2 after:absolute after:block after:size-0 after:border-8 after:border-transparent after:border-t-primary after:-bottom-[0.95rem] after:left-1/2 after:-translate-x-1/2 top-[-3rem]"
          >
            <div className="flex gap-3 w-24 items-center">
              <img src="/camera.svg" alt="camera" />
              <img src="/video.svg" alt="video" />
              <img src="/document.svg" alt="document" />
            </div>
          </span>
        </div>

        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.75036 8.00002H3.16702M3.09648 8.24294L1.15071 14.0552C0.997847 14.5118 0.921417 14.7401 0.976267 14.8807C1.0239 15.0028 1.1262 15.0954 1.25244 15.1306C1.3978 15.1712 1.61736 15.0724 2.05647 14.8748L15.9827 8.60797C16.4113 8.4151 16.6256 8.31866 16.6918 8.1847C16.7494 8.06831 16.7494 7.93174 16.6918 7.81535C16.6256 7.68139 16.4113 7.58495 15.9827 7.39208L2.05161 1.12313C1.61383 0.926124 1.39493 0.827622 1.24971 0.868029C1.1236 0.903121 1.0213 0.995442 0.973507 1.11731C0.91847 1.25764 0.994084 1.48545 1.14531 1.94108L3.09702 7.8213C3.12299 7.89955 3.13598 7.93868 3.14111 7.9787C3.14565 8.01421 3.14561 8.05016 3.14097 8.08565C3.13574 8.12566 3.12265 8.16475 3.09648 8.24294Z"
            stroke="#141E0D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChatInput;
