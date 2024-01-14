import toast from "react-hot-toast";

const Pricing = () => {
  const notify = () => toast("Sign up to get started");
  return (
    <div className="bg-mainColor w-full min-h-[400px] py-12 lg:py-24">
      <div className="md:w-[55%] w-[95%] mx-auto flex flex-col gap-y-6">
        <p className="text-center font-ubuntu font-medium text-base text-white">
          Our Pricing
        </p>
        <p className="text-white text-center font-ubuntu font-medium text-[28px] md:text-[36px] lg:text-[40px]">
          available prices and cheap <br className="lg:flex hidden" /> packages
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4">
          <div className="md:w-[300px] z-10 relative h-[480px] bg-white rounded-xl p-6">
            <p className="py-7 text-black font-ubuntu font-semibold lg:font-bold text-[20px]">
              Basic
            </p>
            <div className="flex justify-start items-baseline">
              <p className="mr-2 text-5xl font-semibold text-black font-ubuntu ">
                $12
              </p>
              <p className="text-black font-ubuntu">/month</p>
            </div>
            <div className="flex flex-col gap-y-3 justify-center px-6">
              <p className="font-ubuntu font-normal text-sm text-[#272727] mt-[45px]">
                Got access only 1 day
              </p>
              <p className="font-ubuntu font-normal text-sm text-[#272727]">
                Get free drinks and snacks
              </p>
              <p className="font-ubuntu font-normal text-sm text-[#272727]">
                Free parking for 1 month
              </p>
            </div>
            <div className="absolute bottom-12 flex justify-center items-center w-full mx-auto left-0">
              <button
                onClick={notify}
                className="h-[42px] md:h-[54px] w-[169px] flex items-center justify-center rounded-[50px] text-[#272727] hover:border-0 transition duration-300 ease-in hover:text-white text-base font-normal font-dmsans hover:bg-pink mx-auto border-[1.2px] border-[#272727]"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="md:w-[300px] z-10 relative h-[480px] bg-white rounded-xl p-6">
            <p className="py-7 text-black font-ubuntu font-semibold lg:font-bold text-[20px]">
              Premium
            </p>
            <div className="flex justify-start items-baseline">
              <p className="mr-2 text-5xl font-semibold text-black font-ubuntu ">
                $24
              </p>
              <p className="text-black font-ubuntu">/month</p>
            </div>
            <div className="flex flex-col gap-y-3 justify-center">
              <div className="flex gap-x-2 mt-[45px] items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Got access only 1 day
                </p>
              </div>
              <div className="flex gap-x-2  items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Get free drinks and snacks
                </p>
              </div>

              <div className="flex gap-x-2  items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Free parking for 1 month
                </p>
              </div>
              <div className="flex gap-x-2  items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  private workout in a special room
                </p>
              </div>
            </div>
            <div className="absolute bottom-12 flex justify-center items-center w-full mx-auto left-0">
              <button
                onClick={notify}
                className="h-[42px] md:h-[54px] w-[169px] flex items-center justify-center rounded-[50px] text-[#272727] hover:border-0 transition duration-300 ease-in hover:text-white text-base font-normal font-dmsans hover:bg-pink mx-auto border-[1.2px] border-[#272727]"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="md:w-[300px] z-10 relative h-[480px] bg-white rounded-xl p-6">
            <p className="py-7 text-black font-ubuntu font-semibold lg:font-bold text-[20px]">
              Super
            </p>
            <div className="flex justify-start items-baseline">
              <p className="mr-2 text-5xl font-semibold text-black font-ubuntu ">
                $32
              </p>
              <p className="text-black font-ubuntu">/month</p>
            </div>
            <div className="flex flex-col gap-y-3 justify-center">
              <div className="flex gap-x-2 mt-[45px] items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Got access only 1 day
                </p>
              </div>
              <div className="flex gap-x-2  items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Get free drinks and snacks
                </p>
              </div>

              <div className="flex gap-x-2  items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Free parking for 1 month
                </p>
              </div>
              <div className="flex gap-x-2  items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Private workout in a special room
                </p>
              </div>
              <div className="flex gap-x-2  items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#272727" />
                  <path
                    d="M4.00001 8.5L6.44373 11L12 5"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-ubuntu font-normal text-sm text-[#272727] ">
                  Access to the fitness community
                </p>
              </div>
            </div>
            <div className="absolute bottom-12 flex justify-center items-center w-full mx-auto left-0">
              <button
                onClick={notify}
                className="h-[42px] md:h-[54px] w-[169px] flex items-center justify-center rounded-[50px] text-[#272727] hover:border-0 transition duration-300 ease-in hover:text-white text-base font-normal font-dmsans hover:bg-pink mx-auto border-[1.2px] border-[#272727]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
