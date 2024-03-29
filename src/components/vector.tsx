import { UseScrolled } from "../hooks/use-scrolled";

const Vector = () => {
  const scrolled = UseScrolled();
  return (
    <div className={`${scrolled && "hidden"} md:flex hidden`}>
      <div className="absolute left-0 top-0">
        <svg
          width="286"
          height="476"
          viewBox="0 0 286 476"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M285 -271C182.867 -74.2362 -57.7792 287.248 -203.304 159.077C-348.829 30.9047 -503.07 316.287 -562 475"
            stroke="#FC3867"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0">
        <svg
          width="332"
          height="515"
          viewBox="0 0 332 515"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M331 -232C228.867 -35.2362 -11.7792 326.248 -157.304 198.077C-302.829 69.9047 -457.07 355.287 -516 514"
            stroke="#FC3867"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0">
        <svg
          width="369"
          height="565"
          viewBox="0 0 369 565"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M368 -182C265.867 14.7638 25.2208 376.248 -120.304 248.077C-265.829 119.905 -420.07 405.287 -479 564"
            stroke="#FC3867"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0">
        <svg
          width="421"
          height="611"
          viewBox="0 0 421 611"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M420 -136C317.867 60.7638 77.2208 422.248 -68.304 294.077C-213.829 165.905 -368.07 451.287 -427 610"
            stroke="#FC3867"
          />
        </svg>
      </div>
    </div>
  );
};

export default Vector;
