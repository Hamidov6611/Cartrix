const Hero = () => {
  return (
    <div className="min-h-[756px] bg-mainColor">
      <div className="md:w-[80%] mx-auto flex lg:flex-row flex-col gap-y-12 justify-between items-center">
        <div className="lg:w-[40%] flex flex-col gap-y-[20px]">
          <p className="font-ubuntu text-[32px] lg:text-[56px] font-semibold text-center lg:text-start lg:font-bold">
            Hy! I Am <br className="lg:flex hidden" />
            Shamima Akhi
          </p>
          <p className="font-ubuntu font-normal lg:text-base text-center lg:text-start text-sm text-mediumDark">
            Service Line helps you to turn your complex multisite, multivendor{" "}
            <br className="lg:flex hidden" /> imaging environment into a uniform
            and balanced operation.
          </p>
          <button className="h-[42px] md:h-[61px] w-[169px] flex items-center justify-center rounded-[87px] text-white text-base font-normal font-dmsans bg-pink mx-auto md:mx-0 md:mr-auto">
            Get Started
          </button>
        </div>
        <div className="lg:w-[40%] w-full flex flex-col justify-end">
          <img
            src="/hero.png"
            alt="hero-image"
            className={`lg:h-[756px] w-full lg:w-[497px] md:object-cover`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
