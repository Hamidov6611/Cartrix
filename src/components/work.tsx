const Work = () => {
  return (
    <div className="bg-mainColor minh-[400px] py-8">
      <div className="flex w-[95%] md:w-[72%] gap-y-8 mx-auto flex-col">
        <div className="px-8 md:px-0 md:w-[40%] mx-auto gap-y-8">
          <p className="font-normal font-ubuntu text-white text-[28px] lg:text-[40px] mb-4 text-center">Some of my Creative work</p>
          <p className="text-[#999999] font-normal font-ubuntu text-sm text-center">
            An all electric vehicle offering an estimated 20 plus miles of range
            per charge for an affordable price is how we define but passion and
            persistence are the principles used to accomplish it
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <img src="/unsplash_P1qyEf1g0HU.png" alt="" className="h-[320px] w-full" />
            <img src="/unsplash_dIMJWLx1YbE.png" alt="" className="h-[320px] w-full" />
            <img src="/unsplash_g-YiX8ynmnY.png" alt="" className="h-[320px] w-full" />
            <img src="/unsplash__UeY8aTI6d0.png" alt="" className="h-[320px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Work;
