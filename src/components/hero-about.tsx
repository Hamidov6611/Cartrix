const HeroAbout = () => {
  return (
    <div className="min-h-[317px] bg-white flex items-center justify-center py-8 lg:py-0">
      <div className="w-[50%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-[30px]">
        <div className="flex justify-center lg:justify-between items-center">
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <p className="text-black lg:font-bold font-semibold font-ubuntu lg:text-[64px] md:text-[55px] text-[40px]">
              258+
            </p>
            <p className="font-dmsans font-semibold lg:font-bold text-black text-base lg:text-[18px]">
              Positive Feedback
            </p>
            <p className="text-primary font-normal text-sm md:text-base font-dmsans">
              From our clients
            </p>
          </div>
          <svg
            className="lg:flex hidden"

            width="1"
            height="137"
            viewBox="0 0 1 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500006"
              y2="137"
              stroke="#D8D8D8"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <p className="text-black lg:font-bold font-semibold font-ubuntu lg:text-[64px] md:text-[55px] text-[40px]">
              590k
            </p>
            <p className="font-dmsans font-semibold lg:font-bold text-black text-base lg:text-[18px]">
              Project Complete
            </p>
            <p className="text-primary font-normal text-sm md:text-base font-dmsans">
              My Achievement
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-between items-center">
          <svg
            width="1"
            height="137"
            viewBox="0 0 1 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:flex hidden"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500006"
              y2="137"
              stroke="#D8D8D8"
            />
          </svg>
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <p className="text-black lg:font-bold font-semibold font-ubuntu lg:text-[64px] md:text-[55px] text-[40px]">
              28+
            </p>
            <p className="font-dmsans font-semibold lg:font-bold text-black text-base lg:text-[18px]">
              Years of Experience
            </p>
            <p className="text-primary font-normal text-sm md:text-base font-dmsans">
              High quailified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
