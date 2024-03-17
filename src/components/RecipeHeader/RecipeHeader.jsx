const RecipeHeader = () => {
  return (
    <div className="container mx-auto font-lexend text-center my-8 md:my-14 lg:my-20 px-3 md:px-5 lg:px-2 flex flex-col items-center ">
      <h1 className="text-dark text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 lg:mb-5">
        Our Recipes
      </h1>
      <p className=" text-dark-60 text-sm md:text-base lg:text-lg w-11/12 md:w-10/12">
        Elevate your culinary experience with our diverse recipe collection.
        From quick and easy weekday meals to extravagant weekend feasts, unlock
        a world of flavors and creativity. Explore now and embark on a delicious
        journey through our curated recipes.
      </p>
    </div>
  );
};

export default RecipeHeader;
