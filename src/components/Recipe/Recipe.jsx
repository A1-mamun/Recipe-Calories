import PropTypes from "prop-types";
const Recipe = ({ recipe, handleCook }) => {
  const { image, name, description, ingredients, time, calorie } = recipe;
  return (
    <div>
      <div className="card grow h-full bg-base-100 shadow-xl p-5 border-2">
        <figure>
          <img
            className="rounded-2xl mb-6 h-56 w-full"
            src={image}
            alt="Recipe"
          />
        </figure>
        <div className="">
          <h2 className="card-title text-dark-02 mb-3 font-lexend">{name}</h2>
          <p className="text-dark-07 mb-5 font-fira">{description}</p>
          <hr />
          <h2 className="card-title mt-5 mb-3 font-lexend text-dark-02">
            Ingredients: {ingredients.length}
          </h2>
          <ul className="list-disc ml-8 mb-5 font-fira text-dark-06">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <hr />
          <div className="flex gap-10 my-5 font-fira text-dark-08">
            <div className="flex gap-2">
              <img src="./clock.png" alt="" />
              <p>{time} minutes</p>
            </div>
            <div className="flex gap-2">
              <img src="./flame.png" alt="" />
              <p>{calorie} calories</p>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleCook(recipe)}
              className="btn bg-green-500 rounded-full text-dark text-lg font-medium font-lexend"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleCook: PropTypes.func,
};
export default Recipe;
