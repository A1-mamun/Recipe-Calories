const Banner = () => {
  return (
    <div className="container mx-auto text-white font-lexend mt-8">
      <div className="hero  h-[240px] md:h-[400px] lg:h-[660px] bg-[url('../../../../public/banner.jpeg')] rounded-3xl">
        <div className="flex justify-center items-center  bg-gradient-to-t from-[#150B2BE5] to-[#150B2B00] w-full h-full rounded-3xl">
          <div className="text-center">
            <h1 className="mb-2 md:mb-5 lg:mb-8 text-2xl md:text-4xl lg:text-7xl font-semibold text-white">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-3 md:mb-5 lg:mb-8 text-xs md:text-base font-inter">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className=" space-x-7">
              <button className="btn btn-lg rounded-full bg-green-500 border-0 text-xl font-semibold">
                Explore Now
              </button>
              <button className="btn btn-lg rounded-full bg-transparent border-1 text-xl text-white font-semibold">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
