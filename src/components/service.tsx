import { data } from "../assets/data/card-data";
import { card } from "../types";

const Service = () => {
  return (
    <div className="bg-mainColor min-h-96 flex flex-col">
      <div className="lg:w-[80%] mx-auto flex flex-col gap-y-8 py-[50px] lg:py-[90px]">
        <div className="w-full flex justify-between items-end lg:flex-row flex-col gap-y-6">
          <div className="lg:w-[30%] flex items-center lg:items-start px-8 md:px-0 flex-col gap-y-4">
            <p className="font-normal font-ubuntu text-sm uppercase md:text-base text-white">
              best services
            </p>
            <h3 className="capitalize font-ubuntu text-white font-semibold lg:font-bold text-[28px] text-center md:text-start lg:text-[40px]">
              Benefits You get when using our services
            </h3>
          </div>
          <div className="lg:w-[25%] flex px-8 md:px-0 lg:justify-end">
            <p className="font-ubuntu font-normal text-center md:text-start text-sm lg:text-base">
              While we can customize your needs plan to suit your needs, most
              clients schedule regular interior services
            </p>
          </div>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-[30px]">
          <div className="flex justify-center lg:justify-between items-center">
            <div className="flex  gap-y-1 gap-x-6 justify-center items-start">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8399 15.04L25.0199 17.8C25.0999 18.04 25.3199 18.18 25.5399 18.2L28.5399 18.48C29.1799 18.54 29.4199 19.32 28.9599 19.74L26.6999 21.72C26.5199 21.88 26.4399 22.12 26.4999 22.34L27.1599 25.28C27.2999 25.9 26.6399 26.38 26.0799 26.06L23.4999 24.52C23.2999 24.4 23.0399 24.4 22.8399 24.52L20.2599 26.06C19.7199 26.38 19.0399 25.9 19.1799 25.28L19.8399 22.34C19.8999 22.12 19.8199 21.88 19.6399 21.72L17.3799 19.74C16.8999 19.32 17.1599 18.54 17.7999 18.48L20.7999 18.2C21.0399 18.18 21.2399 18.04 21.3399 17.82L22.5199 15.06C22.7599 14.46 23.5799 14.46 23.8399 15.04Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.7741 20.8892C36.8258 13.3781 30.7787 7.24729 23.2677 7.1956C15.7566 7.14391 9.62576 13.1909 9.57406 20.702C9.52237 28.2131 15.5694 34.3439 23.0805 34.3956C30.5915 34.4473 36.7224 28.4003 36.7741 20.8892Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.3196 34.26L17.9396 42.76L13.6596 37.86L7.19965 38.46L11.4796 27.74"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.9999 34.26L28.3999 42.76L32.6599 37.86L39.1399 38.46L34.8399 27.74"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col ">
                <p className="font-dmsans font-semibold lg:font-bold text-white text-[18px] lg:text-[20px]">
                  Excellent Design
                </p>
                <p className="text-white font-normal text-sm md:text-base font-dmsans">
                  After getting matched, your <br /> designer will message with
                  you <br /> to collaborate on ideas.
                </p>
              </div>
            </div>
            <svg
              className="lg:flex hidden"
              width="1"
              height="100"
              viewBox="0 0 1 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.07447e-08"
                x2="0.500005"
                y2="100"
                stroke="white"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex  gap-y-1 gap-x-6 justify-center items-start">
              <img src="/two.svg" alt="" />
              <div className="flex flex-col ">
                <p className="font-dmsans font-semibold lg:font-bold text-white text-[18px] lg:text-[20px]">
                  Best Quality
                </p>
                <p className="text-white font-normal text-sm md:text-base font-dmsans">
                  It starts with our fun and easy <br /> project questionnaire
                  where <br />
                  you’ll provide details.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-between items-center">
            <svg
              className="lg:flex hidden"
              width="1"
              height="100"
              viewBox="0 0 1 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.07447e-08"
                x2="0.500005"
                y2="100"
                stroke="white"
              />
            </svg>
            <div className="flex  gap-y-1 gap-x-6 justify-center items-start">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.68 28.5V33.74C38.68 36.5 36.44 38.74 33.68 38.74H10.5C7.74 38.74 5.5 36.5 5.5 33.74V12.5C5.5 9.74 7.74 7.5 10.5 7.5H33.68C36.44 7.5 38.68 9.74 38.68 12.5V17.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29 23H30.48"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.7799 28H38.6101C39.9245 28 41 27.0546 41 25.8992V20.1008C41 18.9454 39.9245 18 38.6101 18H26.7799C24.1509 18 22 19.8908 22 22.2017V23.7983C22 26.1303 24.127 28 26.7799 28Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col ">
                <p className="font-dmsans font-semibold lg:font-bold text-white text-[18px] lg:text-[20px]">
                  Excellent Design
                </p>
                <p className="text-white font-normal text-sm md:text-base font-dmsans">
                  After getting matched, your <br /> designer will message with
                  you <br /> to collaborate on ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-semibold lg:font-bold font-ubuntu text-[28px] md:text-[36px] text-center lg:mt-28 mt-16 text-white">
          What we have for you
        </p>
        <p className="font-ubuntu font-medium text-[20px] md:text-[24px] text-center text-white mb-8">
          Some of the services we provide to meet your needs
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 md:gap-x-10 md:gap-y-10 gap-y-4">
          {data?.map((c: card) => (
            <div key={c.id} className="rounded-[12px] bg-white flex p-3 md:p-6 md:w-full w-[96%] mx-auto md:mx-0">
              <div className="w-[20%] md:w-[15%]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-pink rounded-full flex items-center justify-center">
                  <img src={c.img} alt={c.img} />
                </div>
              </div>
              <div className="w-[65%] md:w-[78%] flex flex-col gap-y-4">
                <p className="font-ubuntu font-semibold lg:font-bold text-[20px] lg:text-[24px] text-black mt-3">
                  {c.title}
                </p>

                <p className="font-ubuntu text-sm lg:text-lg font-normal text-[#272727]">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
