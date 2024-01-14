const Footer = () => {
  return (
    <div className="bg-mainColor min-h-[338px] flex justify-end">
      <div className="mt-[17px] m-[2px] ml-[22px] bg-black min-h-[319px] w-full">
        <div className="py-4 md:py-8 ml-[20px] md:ml-[120px] flex md:flex-row flex-col gap-y-4">
          <div className="md:w-[30%] flex flex-col gap-y-3">
            <p className="text-[20px] md:text-[24px] font-selebriSans font-semibold md:font-bold lg:font-extrabold text-white">
              Cartrix
            </p>
            <p className="font-ubuntu text-primary font-normal">
              An all Design Tools offering an estimated 20 plus <br className="lg:flex hidden"/>Design of range
              per charge for an affordable price <br className="lg:flex hidden"/>is how we define but passion
              and persistence
            </p>
            <img src="/social.svg" alt="social" className="w-[176px] h-[32px]   " />
          </div>
          <div className="md:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
            <div className="flex flex-col gap-y-3">
                <p className="font-ubuntu font-medium text-base text-white">Our Design</p>
                <p className="font-ubuntu font-normal text-base text-primary">Adobe illustration</p>
                <p className="font-ubuntu font-normal text-base text-primary">Commercial Design</p>
                <p className="font-ubuntu font-normal text-base text-primary">Web Development</p>
            </div>
            <div className="flex flex-col gap-y-3">
                <p className="font-ubuntu font-medium text-base text-white">Offers Finance</p>
                <p className="font-ubuntu font-normal text-base text-primary">Current Deals</p>
                <p className="font-ubuntu font-normal text-base text-primary">Mistery Discount</p>
                <p className="font-ubuntu font-normal text-base text-primary">College Discount</p>
            </div>
            <div className="flex flex-col gap-y-3">
                <p className="font-ubuntu font-medium text-base text-white">Design Tools</p>
                <p className="font-ubuntu font-normal text-base text-primary">Dealer Location</p>
                <p className="font-ubuntu font-normal text-base text-primary">Build Car Price</p>
                <p className="font-ubuntu font-normal text-base text-primary">Search Inventory</p>
            </div>
            <div className="flex flex-col gap-y-3">
                <p className="font-ubuntu font-medium text-base text-white">Help Center</p>
                <p className="font-ubuntu font-normal text-base text-primary">Payment Services</p>
                <p className="font-ubuntu font-normal text-base text-primary">FAQ Community</p>
                <p className="font-ubuntu font-normal text-base text-primary">Terms Condition</p>
            </div>
          </div>
        </div>
        <div className="ml-[20px] md:mx-[120px] flex flex-col">
            <h1 className="h-[1px] w-full bg-primary/50"></h1>
            <p className="font-normal text-primary/50 font-ubuntu text-sm my-8 text-center">Copyright Cartrix 2021 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
