const Banner = () => {
  return (
    <div className="container mx-auto text-white font-lexend mt-8 px-3 md:px-5 lg:px-2">
      <div className="hero h-full md:h-[400px] lg:h-[660px] bg-[url('./banner.jpeg')] rounded-3xl">
        <div className="flex justify-center items-center  bg-gradient-to-t from-[#150B2BE5] to-[#150B2B00] w-full h-full rounded-3xl">
          <div className="text-center flex flex-col items-center pt-5 pb-3 px-2">
            <h1 className="mb-2 md:mb-5 lg:mb-8 text-2xl md:text-4xl lg:text-7xl font-semibold text-white">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-3 md:mb-5 lg:mb-8 text-xs md:text-base lg:text-lg font-inter  w-11/12 md:w-10/12">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className=" flex flex-col md:flex-row gap-3">
              <button className="btn btn-sm md:btn-md lg:btn-lg rounded-full bg-color-success border-0 text-base md:text-lg lg:text-xl text-dark font-semibold">
                Explore Now
              </button>
              <button className="btn btn-sm md:btn-md lg:btn-lg rounded-full bg-transparent border-1 text-base md:text-lg lg:text-xl text-white font-semibold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
