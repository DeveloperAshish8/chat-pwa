import React, { useState } from "react";

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <div className=" pt-8 pb-3 px-3 flex flex-col gap-4 fixed bg-[#FAF9F4] w-full border-b-[#E5E5E0] border-[1px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <img src="/leftArrow.svg" alt="icon" />
          <h3 className="text-2xl font-bold">Trip 1</h3>
        </div>
        <img src="/edit.svg" alt="icon" />
      </div>

      <div className=" mt-2 flex justify-between items-center pl-2 ">
        <div className=" flex gap-4 text-left  text-[#606060] ">
          <div className="flex ">
            <img
              src="/heroImage.webp"
              alt="User Avatar"
              className="flex-shrink-0 w-12 h-12 rounded-full"
            />
          </div>
          <div className="">
            <h6 className="text-sm">
              From{" "}
              <strong className="text-[#141E0D] text-base ml-1">
                IGI Airport, T3
              </strong>{" "}
            </h6>
            <h6 className="text-sm">
              To{" "}
              <strong className="text-[#141E0D] text-base ml-1">
                Sector 28
              </strong>{" "}
            </h6>
          </div>
        </div>
        <div
          className="text-[#141E0D] text-[14px] font-medium cursor-pointer"
          onClick={() => setmenuOpened(!menuOpened)}
        >
          <img src="/dot.svg" alt="icon" />

          <div className="md:flex md:items-center md:gap-12 ">
            {/* <nav aria-label="Global"> */}
            <ul
              className={` ${
                menuOpened
                  ? "fixed flex flex-col list-none  m-w-[50%] right-3 top-32 shadow-3xl rounded-lg overflow-hidden border-[#E5E5E0] border-[1px] bg-white"
                  : "hidden"
              }`}
            >
              {/* <ul className="flex md:flex-row flex-col items-center gap-16 text-base font-semibold"> */}
              <li className="flex gap-3 p-3 w-40 border-[#E5E5E0] border-[1px]">
                <img src="/members.svg" alt="icon" />

                <a className=" transition hover:text-primary"> Members </a>
              </li>
              <li className="flex gap-3 p-3 border-[#E5E5E0] border-[1px] w-40">
                <img src="/phone.svg" alt="icon" />
                <a className=" transition hover:text-primary" href="/#about">
                  Share Number
                </a>
              </li>
              <li className="flex gap-3 p-3 border-[#E5E5E0] border-[1px] w-40">
                <img src="/report.svg" alt="icon" />
                <a className=" transition hover:text-primary" href="#">
                  Report
                </a>
              </li>
            </ul>
            {/* </nav> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
