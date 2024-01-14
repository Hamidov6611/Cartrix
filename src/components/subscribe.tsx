import toast from "react-hot-toast";

const Subscribe = () => {
  const notify = () => toast("Sign up to get started");

  return (
    <div className="h-[264px] bg-white w-full py-[40px] space-y-5 px-8 md:px-0">
      <p className="text-center text-primary font-semibold text-base font-selebriSans">
        Subscribe Now
      </p>
      <p className="text-darkGreey font-semibold md:font-bold text-[26px] lg:text-[40px] font-ubuntu text-center">
        Subscribe to get update info from us
      </p>
      <button
        onClick={notify}
        className="h-[42px] md:h-[61px] w-[169px] flex items-center justify-center rounded-[87px] text-white text-base font-normal font-dmsans bg-pink mx-auto"
      >
        Get Started
      </button>
    </div>
  );
};

export default Subscribe;
